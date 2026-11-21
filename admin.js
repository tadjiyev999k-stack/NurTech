import { supabase } from "./supabase.js";

let isAdminBookSubmitting = false;

async function handleBookUpload(event) {
  event.preventDefault();
  if (isAdminBookSubmitting) return;

  const title = document.getElementById("book-title-input")?.value.trim();
  const author = document.getElementById("book-author-input")?.value.trim();
  const description = document.getElementById("book-desc-input")?.value.trim();
  const category =
    document.getElementById("book-category-input")?.value || "other";

  const pdfFile = document.getElementById("book-file-input")?.files?.[0];
  const coverFile = document.getElementById("book-image-input")?.files?.[0];
  const submitBtn = document.getElementById("btn-save-book");

  if (!title || !author || !description || !pdfFile) return;

  isAdminBookSubmitting = true;
  if (submitBtn) submitBtn.disabled = true;

  let uploadedBookPath = null;

  try {
    const cleanPdfName = `${Date.now()}_${pdfFile.name.replace(/[^a-zA-Z0-9._-]/g, "_")}`;
    uploadedBookPath = `books/${cleanPdfName}`;

    const { error: pdfError } = await supabase.storage
      .from("library-files")
      .upload(uploadedBookPath, pdfFile, { upsert: false });

    if (pdfError) throw pdfError;

    const { data: pdfUrlData } = supabase.storage
      .from("library-files")
      .getPublicUrl(uploadedBookPath);

    const fileUrl = pdfUrlData.publicUrl;

    let imageUrl =
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&auto=format&fit=crop&q=60";

    if (coverFile) {
      const cleanCoverName = `${Date.now()}_${coverFile.name.replace(/[^a-zA-Z0-9._-]/g, "_")}`;
      const coverPath = `covers/${cleanCoverName}`;
      const { error: coverError } = await supabase.storage
        .from("library-files")
        .upload(coverPath, coverFile, { upsert: false });

      if (!coverError) {
        const { data: coverUrlData } = supabase.storage
          .from("library-files")
          .getPublicUrl(coverPath);
        if (coverUrlData?.publicUrl) imageUrl = coverUrlData.publicUrl;
      }
    }

    const { error: dbError } = await supabase.from("books").insert([
      {
        title,
        author,
        description,
        category,
        image_url: imageUrl,
        file_url: fileUrl,
        views: 0,
        downloads: 0,
        likes: [],
        comments: [],
      },
    ]);

    if (dbError) {
      if (uploadedBookPath) {
        await supabase.storage.from("library-files").remove([uploadedBookPath]);
      }
      throw dbError;
    }

    event.target.reset();
  } catch (err) {
    console.error("Admin book upload failed:", err.message);
  } finally {
    isAdminBookSubmitting = false;
    if (submitBtn) submitBtn.disabled = false;
  }
}

const bookFormEl = document.getElementById("book-form");
if (bookFormEl && !bookFormEl.dataset.bound) {
  bookFormEl.dataset.bound = "true";
  bookFormEl.addEventListener("submit", handleBookUpload);
}
