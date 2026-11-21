// Supabase & Local Portable Storage Fallback Architecture
const SUPABASE_URL = "https://rwexkxzznwoyxgybtzot.supabase.co";
const SUPABASE_PUBLIC_KEY = "sb_publishable_SU13uQErWHRKffYSdV5A_Q_AMDlXUaJ";
let supabaseClient = null;

if (window.supabase) {
  try {
    supabaseClient = window.supabase.createClient(
      SUPABASE_URL,
      SUPABASE_PUBLIC_KEY,
    );
  } catch (e) {
    console.warn("Supabase init error, falling back to local storage:", e);
  }
}

const translations = {
  uz: {
    pageTitle: "NURTECH — Nurobod 1-Son Texnikumi",
    brandSub: "Nurobod 1-Son Texnikumi",
    navHome: "Bosh sahifa",
    navNews: "E'lonlar",
    navLibrary: "E-Kutubxona",
    navAbout: "Biz haqimizda",
    navNurtechInfo: "NURTech nima?",
    navFacultyInfo: "Xodimlar va O'qituvchilar",
    navPrivacyInfo: "Maxfiylik siyosati",
    navHubInfo: "Talabalar Hubi",
    navContact: "Aloqa",
    themeToggleTitle: "Mavzuni o'zgartirish",
    heroBadge: "Rasmiy Raqamli Portali",
    heroTitle: "Amaliy Bilim Va Kelajak Kasblari Markazi",
    motto1H: "Kasb egasi bo'lib chiqasiz",
    motto1P:
      "Amaliy ish tajribasiga ega bo'lasiz. Mustaqil daromad topishga tayyor bo'lasiz.",
    motto2H: "O'zingizga ishonch hosil qilasiz",
    motto2P: "Bugungi bilim - ertangi muvaffaqiyat!",
    btnExplore: "E'lonlarni Ko'rish",
    btnContact: "Biz Bilan Bog'lanish",
    statStudents: "O'quvchilar Soni",
    statWorkshops: "O'quv xonalari",
    statTeachers: "Xodimlar Soni",
    statEmployment: "Ish Bilan Ta'minlash",
    statEditTitle: "Ko'rsatkichni Tahrirlash",
    statEditCancel: "Bekor qilish",
    statEditSave: "Saqlash",
    statEditError: "Iltimos, to'g'ri musbat son kiriting!",
    statEditSuccess: "Ko'rsatkich muvaffaqiyatli yangilandi!",
    editPenTitle: "Tahrirlash",
    hubTitle: "Talabalar Hamjamiyati va Peer-to-Peer Hub",
    hubSub: "Imkoniyatlar, hamkorlik va resurslar almashinuvi",
    hubF1Title: "Talantlar va Ko'nikmalar Marketplace",
    hubF1Desc:
      "O'zingiz egallagan ko'nikmalarni belgilang va loyihalarga mos jamoa a'zolarini osongina toping.",
    hubF2Title: "Dinamik Jamoa va Loyihalar Konstruktori",
    hubF2Desc:
      "Musobaqa yoki to'garaklar uchun aniq rollarga ega loyihalar oching va a'zolarni bir bosishda yig'ing.",
    hubF3Title: "Talabalar Tashabbuslari Inkubatori",
    hubF3Desc:
      "O'z g'oyalaringizni ilgari suring. Ovozlar to'planganda g'oyangiz avtomatik ma'muriyatga taqdim etiladi.",
    hubF4Title: "Resurs va Qurollar Almashinuvi",
    hubF4Desc:
      "Asbob-uskunalar, o'quv qo'llanmalari almashish hamda yo'qotilgan buyumlarni tezda topish platformasi.",
    hubF5Title: "Mikro-Ustozlik va Akademik Peer Tarmoq",
    hubF5Desc:
      "Murakkab mavzularda bir-biringizga yordam bering va ko'ngillilik soatlarini to'plab sertifikatlarga ega bo'ling.",
    newsTitle: "So'nggi E'lonlar va Yangiliklar",
    newsSub: "Texnikum hayotiga oid eng muhim xabarlar",
    annSearchPlaceholder:
      "E'lon sarlavhasi, matni yoki kalit so'z bo'yicha qidirish...",
    lblFilterBtn: "Filtrlash va Saralash",
    noAnnouncementsText: "Hozircha faol e'lonlar topilmadi.",
    libTitle: "Raqamli Kutubxona va Elektron Qo'llanmalar",
    libSub:
      "Texnikumimiz ARM (Axborot-resurs markazi) elektron kitoblar bazasi",
    libSearchPlaceholder:
      "Kitob nomi, muallifi yoki kalit so'z bo'yicha qidirish...",
    libCatAll: "Barcha Kategoriyalar",
    libCatIt: "Dasturlash va IT",
    libCatTech: "Texnika va Muhandislik",
    libCatScience: "Aniq Fanlar",
    libCatLiterature: "Badiiy Adabiyot",
    libCatOther: "Boshqa Qo'llanmalar",
    noBooksText: "Kutubxonada kitoblar topilmadi.",
    bookDownloadedTimes: "marta yuklangan",
    bookDownloadBtn: "Yuklab olish",
    bookDabDownloadBtn: "Kitobni Yuklab Olish",
    bookAuthorPrefix: "Muallif:",
    bookViewsWord: "ko'rish",
    bookDownloadsWord: "yuklab olish",
    bookCommentsHeader: "Fikrlar va Izohlar",
    bookCommentPlaceholder: "Kitob haqida fikringizni yozing...",
    noBookCommentsText:
      "Hozircha izohlar yo'q. Kitob haqida birinchi bo'lib fikr bildiring!",
    bookModalTitle: "Kitob Qo'shish (E-Kutubxona)",
    lblBookTitle: "Kitob Nomi:",
    phBookTitle: "Masalan: Python Dasturlash Asoslari",
    lblBookAuthor: "Muallif (Author):",
    phBookAuthor: "Masalan: Mark Lutz",
    lblBookCategory: "Kategoriya:",
    lblBookFile: "Kitob Fayli (PDF yoki Word - Majburiy):",
    lblBookImage: "Kitob Muqovasi / Rasmi (Ixtiyoriy):",
    lblBookDesc: "Tavsif (Description):",
    phBookDesc: "Kitob haqida qisqacha ma'lumot...",
    btnSaveBook: "Kitobni Yuklash",
    errBookFields: "Iltimos, barcha majburiy maydonlarni to'ldiring!",
    errBookFile: "Iltimos, kitob faylini (PDF yoki Word) yuklang!",
    toastBookAdded: "Kitob muvaffaqiyatli yuklandi va kutubxonaga qo'shildi!",
    confirmDeleteBook: "Ushbu kitobni kutubxonadan o'chirishni tasdiqlaysizmi?",
    toastBookDeleted: "Kitob kutubxonadan o'chirildi.",
    facultyTitle: "Texnikum Xodimlari va O'qituvchilari",
    facultySub: "Jamoamiz va ularning egallab turgan lavozimlari ro'yxati",
    searchPlaceholder: "Xodimning ismi yoki lavozimi bo'yicha qidirish...",
    noStaffFound: "Xodim topilmadi.",
    pageLabel: "Sahifa",
    prevTitle: "Oldingi",
    nextTitle: "Keyingi",
    staffModalTitle: "Xodim Qo'shish",
    lblStaffName: "F.I.Sh (To'liq ism):",
    phStaffName: "Masalan: Karimov Azizbek",
    lblStaffRole: "Lavozimi:",
    phStaffRole: "Masalan: Informatika fani o'qituvchi",
    lblStaffDesc: "Tavsif / Qo'shimcha ma'lumot:",
    phStaffDesc: "Xodim haqida ma'lumot...",
    btnSaveStaff: "Saqlash",
    errStaffFields: "Iltimos, xodimning ismi va lavozimini kiriting!",
    toastStaffAdded: "Yangi xodim ro'yxatga qo'shildi!",
    confirmDeleteStaff: "Ushbu xodimni o'chirishni tasdiqlaysizmi?",
    toastStaffDeleted: "Xodim ro'yxatdan o'chirildi.",
    lblFacultyModalDesc: "Lavozim Tavsifi va Ma'lumot:",
    defaultFacultyDesc:
      "Ushbu xodim uchun ma'muriyat tomonidan qo'shimcha tavsif kiritilmagan.",
    contactTitle: "Biz Bilan Bog'laning",
    contactSub: "Savollaringiz bormi? Bizga xabar qoldiring",
    lblAddress: "Manzil (Google Maps):",
    txtAddress:
      "Nurobod shahri, Samarqand viloyati, O'zbekiston (Nurabadskiy Tekhnikum)",
    mapClickHint: "Xaritada ko'rish uchun bosing",
    tgClickHint: "Telegram kanaliga o'tish",
    lblPhone: "Telefon:",
    lblTelegram: "Telegram Kanal:",
    phFormName: "Ismingiz",
    phFormEmail: "Elektron pochtangiz (Email)",
    phFormMsg: "Xabaringiz yoki murojaatingiz (maksimum 2000 belgi)...",
    btnSend: "Xabarni Yuborish",
    footerText:
      "© 2026 NURTECH — Nurobod 1-Son Texnikumi. Barcha huquqlar himoyalangan.",
    cookieTitle: "Maxfiylik va Kuki",
    cookieDesc:
      "Veb-sayt xizmatlaridan to'liq foydalanish, e'lon va yangiliklar bildirishnomalarini qurilmangizga olish hamda foydalanuvchi tajribasini yaxshilash uchun kukilarga ruxsat bering.",
    cookieAll: "Barchasiga roziman",
    cookieNecessary: "Faqat zaruriylariga roziman",
    btnAuth: "Kirish",
    profileManageTitle: "Profilni boshqarish",
    btnAddPost: "Yangilik yoki E'lon Qo'shish",
    btnAddBook: "+ Kitob Qo'shish",
    finishedText: "TUGALLANDI",
    lblLogEmail: "Elektron Pochta:",
    phLogEmail: "email@domain.uz yoki librarian1",
    lblLogPass: "Maxfiy Parol:",
    btnLoginSubmit: "Tizimga Kirish",
    lblRegName: "Ism:",
    phRegName: "Masalan: Azizbek",
    lblRegSurname: "Familiya:",
    phRegSurname: "Masalan: Karimov",
    lblRegEmail: "Elektron Pochta:",
    lblRegPass: "Maxfiy Parol (Kamida 8 ta belgi):",
    lblRegRole: "Foydalanuvchi Turi:",
    optRoleStudent: "O'quvchi",
    optRoleFaculty: "Xodim / O'qituvchi",
    optRoleAdmin: "Administrator",
    optRoleLibrarian: "Kutubxonachi (Librarian)",
    btnRegSubmit: "Hisob Ochish",
    errWrongLogin: "Elektron pochta yoki parol noto'g'ri kiritildi!",
    errWrongAdminPass: "Admin paroli noto'g'ri! Qaytadan urinib ko'ring.",
    errShortPass: "Parol kamida 8 ta belgidan iborat bo'lishi kerak!",
    errEmailExists: "Bu elektron pochta orqali allaqachon hisob ochilgan!",
    errFillAllFields: "Iltimos, barcha maydonlarni to'ldiring!",
    tabOverview: "Umumiy",
    tabPosts: "E'lonlarim",
    tabSaved: "Saqlangan & Yoqtirilganlar",
    tabNotif: "Bildirishnomalar",
    tabBadges: "Nishonlar",
    lblProfFile: "Kompyuterdan profil rasmini yuklash:",
    selectedFilePrefix: "Tanlangan fayl:",
    lblProfName: "Ism:",
    lblProfSurname: "Familiya:",
    lblProfEmail: "Elektron Pochta:",
    lblProfPass: "Yangi Parol (Kamida 8 ta belgi):",
    phProfPass: "O'zgartirish uchun yangi parol...",
    btnSaveProfile: "O'zgarishlarni Saqlash",
    btnLogoutTxt: "Hisobdan Chiqish",
    toastProfileUpdated: "Profil ma'lumotlari saqlandi!",
    lblMyPostsTitle: "Mening Yaratgan E'lonlarim",
    btnAddPostDash: "+ Yangi E'lon Qo'shish",
    noMyPostsText: "Siz hali e'lon yaratmagansiz.",
    btnDeletePost: "O'chirish",
    confirmDeletePost: "Ushbu e'lonni butunlay o'chirishni tasdiqlaysizmi?",
    toastPostDeleted: "E'lon o'chirildi.",
    postModalHeader: "Yangilik, E'lon yoki Tanlov Qo'shish",
    lblPostCat: "Bo'lim / Kategoriya:",
    postCatHintTitle:
      "Imtihon: sinovlar va testlar; To'garak: seksiyalar; Tanlov: musobaqa; Tadbir: marosimlar",
    optCatExam: "Imtihon",
    optCatClub: "To'garak",
    optCatComp: "Tanlov / Musobaqa",
    optCatEvent: "Tadbir / Event",
    lblPostHeading: "Sarlavha (Maksimum 150 belgi):",
    phPostHeading: "E'lon sarlavhasi...",
    lblPostDeadline: "Tugash Sanasi:",
    lblAllowEnrollText:
      "O'quvchilar uchun \"Ro'yxatdan o'tish\" tugmasi yoqilsinmi?",
    lblPostMedia: "Media yoki Hujjat fayl (Rasm, Video, PDF, DOCX, XLSX, TXT):",
    lblMediaHint:
      "Istalgan keng tarqalgan formatdagi rasmlar, videolar yoki hujjatlarni yuklashingiz mumkin.",
    lblPostTagsHint: "Teglar (So'z yozib ENTER tugmasini bosing):",
    phPostTags: "Teg yozing va Enter bosing...",
    lblPostBody: "Batafsil Mazmuni (Kamida 10 ta so'z bo'lishi shart):",
    phPostBody: "E'lon matnini kiriting (Kamida 10 ta so'z)...",
    wordCountPrefix: "So'zlar:",
    btnPublishPost: "E'lonni Chop etish",
    errPostTitle: "Iltimos, e'lon sarlavhasini kiriting!",
    errPostWords:
      "E'lon mazmuni kamida 10 ta so'zdan iborat bo'lishi lozim! Hozirgi so'zlar soni:",
    toastPostPublished: "E'lon muvaffaqiyatli chop etildi!",
    fieldsMainTitle: "Texnikumimizda O'qitiladigan Mutaxassislik Yo'nalishlari",
    fieldsCat1: "1-Bosqich (9-Sinf Bazasida) Dastlabki 9 ta Yo'nalish:",
    fieldsCat2: "2-Bosqich (11-Sinfni Tugatganlar Uchun!) 3 ta Yo'nalish:",
    fItem1: "Tikuvchi",
    fItem2: "Traktorchi-Mashinist",
    fItem3: "Elektromontyor",
    fItem4: "Payvandlovchi",
    fItem5: "Quyosh panellarini o'rnatish va ularga xizmat ko'rsatish",
    fItem6: "Avtomobillarni ta'mirlash va ularga xizmat ko'rsatish",
    fItem7: "Apparat va dasturiy ta'minot sozlovchisi",
    fItem8: "Turar-joy kommunal xo'jaligi ustasi",
    fItem9: "Sartarosh (Modeler)",
    fItem10: "Metallga ishlov berish texnologiyasi",
    fItem11:
      "Yengil sanoat buyumlari konstruksiyasi va texnologiyasi (Ishlab chiqarish turlari bo'yicha)",
    fItem12:
      "Suv va kanalizatsiya tizimlarini montaj qilish, foydalanish va ta'mirlash",
    lblTabNurtech: "NURTech haqida",
    lblTabFaculty: "Xodimlar",
    lblTabPrivacy: "Maxfiylik Siyosati",
    lblTabHub: "Talabalar Hubi",
    txtAbTitle: "Nurobod 1-Son Texnikumiga Xush Kelibsiz",
    txtAbSub:
      "Bilim Amaliyot Bilan Jipslashadigan, Maqsadlar Imkoniyatga Aylanadigan Maskan.",
    txtAbH1: "Ertangi Kunning Yetuk Mutaxassislarini Tayyorlaymiz",
    txtAbP1:
      "Nurobod 1-son texnikumida ta'lim an'anaviy sinf mashg'ulotlaridan ancha yiroqqa boradi. Biz har bir o'quvchiga chuqur akademik poydevor bilan birga amaliy tajriba berishga bag'ishlangan ko'p tarmoqli maskanmiz. Maqsadimiz — har bir talabani zamonaviy mehnat bozorida raqobatbardosh, tez moslashuvchan va professional mutaxassisga aylantirishdir.",
    txtAbH2: "Nega Aynan Bizning Texnikum?",
    txtAbF1T: "Zamonaviy Laboratoriya va Ustaxonalar",
    txtAbF1D:
      "Haqiqiy mahorat faqat amaliyotda shakllanadi. Ustaxonalarimiz zamonaviy texnik uskunalar va simulyatsiya vositalari bilan jihozlangan.",
    txtAbF2T: "Xalqaro Saviyadagi O'qituvchilar va Ustozlar",
    txtAbF2D:
      "Bizning ustozlarimiz talabchan va intizomli bo'lish bilan birga, har bir o'quvchiga g'amxo'r va yordamga tayyordir.",
    txtAbF3T: "Ahil va Umrbod Jamiyat",
    txtAbF3D:
      "Bu yerda orttirgan do'stlaringiz va ustozlaringiz bilan aloqalar butun faoliyatingiz davomida sizga hamroh bo'ladi.",
    txtAbGradT: "Kelajakka Tayyorgarlik",
    txtAbGradD: "Bizda ta'limni yakunlab, siz quyidagilarga ega bo'lasiz:",
    txtGrad1T: "Tan olingan Diplom:",
    txtGrad1D: "Bilim va texnik salohiyatingizni tasdiqlovchi rasmiy hujjat.",
    txtGrad2T: "Amaliy Tajriba:",
    txtGrad2D:
      "O'z sohangizda amaliy mashg'ulotlar orqali orttirilgan haqiqiy mahorat.",
    txtGrad3T: "Mustaqillik va Tayyorgarlik:",
    txtGrad3D:
      "Mehnat bozorida darhol mustaqil daromad topishga to'liq tayyorlik.",
    txtAbQuote:
      "\"Shaxsiy o'sish, amaliy mahorat va muvaffaqiyatli karyera sari yo'lingiz shu yerdan boshlanadi.\"",
    txtPrivTitle: "Umumiy Maxfiylik va Ma'lumotlarni Himoyalash Siyosati",
    txtPrivIntro:
      "Bizning portalimiz ta'lim hamjamiyatini yanada jipslashtirish, o'quvchilar va o'qituvchilar o'rtasida o'zaro imkoniyatlarni kengaytirish hamda ta'lim sifatini oshirish maqsadida yaratilgan.",
    txtPrivR1T: "1. Ma'lumotlarning Tarjimon Xizmatiga Uzatilishi",
    txtPrivR1:
      "Platformamizda ko'p tilli interfeys qo'llab-quvvatlanadi va foydalanuvchi tanlagan til bo'yicha barcha ma'lumotlar qulay tarzda ko'rsatiladi. Shaxsiy ma'lumotlaringiz uchinchi tomonlarga sotilmaydi yoki ulashilmaydi.",
    txtPrivR2T: "2. Reklama va Tijorat Maqsadlarida Foydalanilmaslik",
    txtPrivR2:
      "Siz tomoningizdan kiritilgan shaxsiy ma'lumotlar, emeyllar yoki e'lonlar hech qachon reklama kompaniyalariga sotilmaydi va tijoriy vositachilik uchun ishlatilmaydi.",
    txtPrivR3T: "3. Bildirishnomalar va Kuki Ruxsatnomalari",
    txtPrivR3:
      "Qurilmangizga e'lonlar va muhim xabarnomalar kelishi uchun \"Zaruriy kukilarga ruxsat berish\" tugmasini bosishingiz kifoya. Ma'lumotlar faqat tizim samaradorligini va foydalanuvchi tajribasini yaxshilash uchun qo'llaniladi.",
    txtPrivR4T: "4. Platformaning Asosiy Missiyasi",
    txtPrivR4:
      "NURTech portali ta'lim tizimini raqamlashtirish, talabalar o'rtasida peer-to-peer hamkorlikni rivojlantirish hamda kollej muhitini yanada qulay va unumdor qilishga xizmat qiladi.",
    lblFilterModalTitle: "Filtrlash va Saralash",
    lblFilterModalDesc: "E'lonlarni kerakli tur va reyting bo'yicha saralang",
    lblCatTitle: "Kategoriyalar:",
    filtAll: "Barchasi",
    filtExam: "Imtihonlar",
    filtClub: "To'garaklar",
    filtComp: "Tanlovlar",
    filtEvent: "Tadbirlar",
    lblSortTitle: "Saralash tartibi:",
    sortNew: "Eng yangi",
    sortLikes: "Ko'p yoqtirilgan",
    sortEnrolls: "Ko'p ro'yxatdan o'tgan",
    sortViews: "Ko'p ko'rilgan",
    btnApplyFilter: "Filtrni Qo'llash",
    lblDabSave: "Saqlash",
    lblDabSaved: "Saqlangan",
    lblActShare: "Ulashish",
    lblActReport: "Shikoyat qilish",
    lblViewsText: "ko'rish",
    lblCommentsHeader: "Izohlar",
    sortPopular: "Eng ommabop",
    sortNewest: "Eng yangi",
    phNewComment: "Izoh qoldiring...",
    btnSubmitComment: "Izoh yozish",
    noCommentsText: "Hozircha izohlar yo'q.",
    btnReply: "Javob berish",
    phReply: "Javob yozish...",
    btnSendReply: "Yuborish",
    lblShareModalTitle: "E'lonni Ulashish",
    lblShareModalDesc:
      "Ushbu e'lonni ijtimoiy tarmoqlar yoki platformalar orqali ulashing:",
    lblCopyLink: "Havolani Nusxalash",
    toastLinkCopied: "Havola nusxalandi!",
    lblReportModalTitle: "Muammo haqida xabar berish",
    lblReportModalDesc:
      "Ushbu e'lon yoki kitobdagi muammoni batafsil bayon qiling. Xabaringiz to'g'ridan-to'g'ri ma'muriyatga yuboriladi.",
    phReportDesc: "Muammo tafsilotlarini yozing...",
    btnSubmitReport: "Shikoyatni Yuborish",
    lblSubtabSaved: "Saqlangan E'lonlar",
    lblSubtabLiked: "Yoqtirilgan E'lonlar",
    noSavedPosts: "Saqlangan e'lonlar mavjud emas.",
    noLikedPosts: "Yoqtirilgan e'lonlar mavjud emas.",
    authorPrefix: "Muallif:",
    lblNotifTitle: "Ishtirokchilar va Aktivlik Tarixi",
    noNotifText: "Hozircha bildirishnomalar yo'q.",
    lblBadgesTitle: "Mashhurlik va Yutuqlar Nishonlari",
    lblBadgesDesc:
      "Jami e'lonlaringizga ro'yxatdan o'tgan o'quvchilar soni ortgani sari nishonlaringiz yuksaladi.",
    badgeUnlocked: "ERISHILGAN",
    badgeLocked: "Qulflangan",
    badgeTargetPrefix: "Maqsad:",
    badgeTargetSuffix: "ta ishtirokchi",
    authLoginTitle: "Tizimga Kirish",
    authRegisterTitle: "Hisob Ochish",
    txtNoAccount: "Hisobingiz yo'qmi?",
    linkRegister: "Hisob ochish",
    txtHasAccount: "Allaqachon hisobingiz bormi?",
    linkLogin: "Tizimga kirish",
    txtOrAdmin: "yoki",
    txtAreYouAdmin: "Adminmisiz?",
    authAdminTitle: "Admin Kirishi",
    txtAdminDesc:
      "Administrator huquqlarini tasdiqlash uchun maxfiy parolni kiriting:",
    lblAdminPass: "Admin Paroli:",
    btnAdminSubmit: "Admin Sifatida Kirish",
    linkAdminBack: "← Oddiy kirishga qaytish",
    btnAddStaff: "+ Xodim Qo'shish",
    confirmTitle: "Tasdiqlash",
    confirmCancel: "Bekor qilish",
    confirmOk: "Tasdiqlash",
    timeJustNow: "hozirgina",
    timeMinsAgo: "daqiqa oldin",
    timeHoursAgo: "soat oldin",
    timeDaysAgo: "kun oldin",
    timeMonthsAgo: "oy oldin",
    docLabel: "Hujjat",
    deadlineLabel: "Tugash sanasi:",
    statViewsTooltip: "E'lonlaringiz to'plagan jami ko'rishlar soni",
    statLikesTooltip: "E'lonlaringiz to'plagan jami yoqtirishlar soni",
    statEnrollsTooltip:
      "Jami barcha e'lonlaringizga ro'yxatdan o'tgan o'quvchilar soni",
  },
  en: {
    pageTitle: "NURTECH — Nurabad Technicum No. 1",
    brandSub: "Nurabad Technicum No. 1",
    navHome: "Home",
    navNews: "Announcements",
    navLibrary: "E-Library",
    navAbout: "About Us",
    navNurtechInfo: "What is NURTech?",
    navFacultyInfo: "Faculty & Staff",
    navPrivacyInfo: "Privacy Policy",
    navHubInfo: "Student Hub",
    navContact: "Contact",
    themeToggleTitle: "Switch Theme",
    heroBadge: "Official Digital Portal",
    heroTitle: "Center of Practical Knowledge and Future Professions",
    motto1H: "Graduate as a Skilled Professional",
    motto1P:
      "Gain hands-on work experience and be ready to earn an independent income.",
    motto2H: "Build Confidence in Yourself",
    motto2P: "Today's knowledge is tomorrow's success!",
    btnExplore: "View Announcements",
    btnContact: "Contact Us",
    statStudents: "Total Students",
    statWorkshops: "Classrooms & Labs",
    statTeachers: "Total Staff",
    statEmployment: "Employment Rate",
    statEditTitle: "Edit Statistic",
    statEditCancel: "Cancel",
    statEditSave: "Save",
    statEditError: "Please enter a valid positive number!",
    statEditSuccess: "Statistic updated successfully!",
    editPenTitle: "Edit",
    hubTitle: "Student Community & Peer-to-Peer Hub",
    hubSub: "Opportunities, collaboration, and resource sharing",
    hubF1Title: "Talents & Skills Marketplace",
    hubF1Desc:
      "Highlight your acquired skills and easily find matching teammates for your projects.",
    hubF2Title: "Dynamic Team & Project Builder",
    hubF2Desc:
      "Launch projects with defined roles for competitions or clubs and recruit members in one click.",
    hubF3Title: "Student Initiatives Incubator",
    hubF3Desc:
      "Pitch your ideas. Once enough votes are gathered, your proposal is automatically submitted to the administration.",
    hubF4Title: "Resource & Equipment Exchange",
    hubF4Desc:
      "A platform to share tools, study guides, and quickly recover lost items across campus.",
    hubF5Title: "Micro-Mentoring & Academic Peer Network",
    hubF5Desc:
      "Help each other with challenging subjects and earn volunteer hours toward official certificates.",
    newsTitle: "Latest Announcements & News",
    newsSub: "The most important updates from campus life",
    annSearchPlaceholder:
      "Search announcements by title, content, or keyword...",
    lblFilterBtn: "Filter & Sort",
    noAnnouncementsText: "No active announcements found.",
    libTitle: "Digital Library & Electronic Guides",
    libSub: "Information Resource Center (IRC) electronic book repository",
    libSearchPlaceholder: "Search by book title, author, or keyword...",
    libCatAll: "All Categories",
    libCatIt: "Programming & IT",
    libCatTech: "Engineering & Technology",
    libCatScience: "Exact Sciences",
    libCatLiterature: "Fiction & Literature",
    libCatOther: "Other Guides",
    noBooksText: "No books found in the library.",
    bookDownloadedTimes: "downloads",
    bookDownloadBtn: "Download",
    bookDabDownloadBtn: "Download Book",
    bookAuthorPrefix: "Author:",
    bookViewsWord: "views",
    bookDownloadsWord: "downloads",
    bookCommentsHeader: "Reviews & Comments",
    bookCommentPlaceholder: "Write your thoughts about this book...",
    noBookCommentsText: "No comments yet. Be the first to review this book!",
    bookModalTitle: "Add Book (E-Library)",
    lblBookTitle: "Book Title:",
    phBookTitle: "e.g. Python Programming Fundamentals",
    lblBookAuthor: "Author:",
    phBookAuthor: "e.g. Mark Lutz",
    lblBookCategory: "Category:",
    lblBookFile: "Book File (PDF or Word - Required):",
    lblBookImage: "Book Cover / Image (Optional):",
    lblBookDesc: "Description:",
    phBookDesc: "Brief summary of the book...",
    btnSaveBook: "Upload Book",
    errBookFields: "Please fill in all required fields!",
    errBookFile: "Please select a book file (PDF or Word)!",
    toastBookAdded: "Book uploaded and added to the library!",
    confirmDeleteBook:
      "Are you sure you want to delete this book from the library?",
    toastBookDeleted: "Book removed from library.",
    facultyTitle: "Technicum Faculty & Staff",
    facultySub: "Directory of our team and their positions",
    searchPlaceholder: "Search staff by name or position...",
    noStaffFound: "No staff members found.",
    pageLabel: "Page",
    prevTitle: "Previous",
    nextTitle: "Next",
    staffModalTitle: "Add Staff Member",
    lblStaffName: "Full Name:",
    phStaffName: "e.g. Azizbek Karimov",
    lblStaffRole: "Position / Role:",
    phStaffRole: "e.g. Computer Science Teacher",
    lblStaffDesc: "Description / Additional Info:",
    phStaffDesc: "Details about the staff member...",
    btnSaveStaff: "Save",
    errStaffFields: "Please enter both name and position!",
    toastStaffAdded: "New staff member added!",
    confirmDeleteStaff: "Are you sure you want to remove this staff member?",
    toastStaffDeleted: "Staff member removed.",
    lblFacultyModalDesc: "Role Description & Information:",
    defaultFacultyDesc:
      "No additional description has been added for this staff member yet.",
    contactTitle: "Contact Us",
    contactSub: "Have questions? Leave us a message",
    lblAddress: "Address (Google Maps):",
    txtAddress:
      "Nurabad City, Samarkand Region, Uzbekistan (Nurabad Technicum)",
    mapClickHint: "Click to view on map",
    tgClickHint: "Open Telegram channel",
    lblPhone: "Phone:",
    lblTelegram: "Telegram Channel:",
    phFormName: "Your Name",
    phFormEmail: "Your Email Address",
    phFormMsg: "Your message or inquiry (max 2000 characters)...",
    btnSend: "Send Message",
    footerText:
      "© 2026 NURTECH — Nurabad Technicum No. 1. All rights reserved.",
    cookieTitle: "Privacy & Cookies",
    cookieDesc:
      "Allow cookies to enjoy full portal features, receive announcements and notifications, and improve your user experience.",
    cookieAll: "Accept All",
    cookieNecessary: "Accept Necessary Only",
    btnAuth: "Sign In",
    profileManageTitle: "Manage Profile",
    btnAddPost: "Add News or Announcement",
    btnAddBook: "+ Add Book",
    finishedText: "FINISHED",
    lblLogEmail: "Email Address:",
    phLogEmail: "email@domain.uz or librarian1",
    lblLogPass: "Password:",
    btnLoginSubmit: "Sign In",
    lblRegName: "First Name:",
    phRegName: "e.g. Azizbek",
    lblRegSurname: "Last Name:",
    phRegSurname: "e.g. Karimov",
    lblRegEmail: "Email Address:",
    lblRegPass: "Password (At least 8 characters):",
    lblRegRole: "Account Type:",
    optRoleStudent: "Student",
    optRoleFaculty: "Staff / Teacher",
    optRoleAdmin: "Administrator",
    optRoleLibrarian: "Librarian",
    btnRegSubmit: "Create Account",
    errWrongLogin: "Incorrect email or password!",
    errWrongAdminPass: "Incorrect admin password! Please try again.",
    errShortPass: "Password must be at least 8 characters long!",
    errEmailExists: "An account with this email already exists!",
    errFillAllFields: "Please fill in all required fields!",
    tabOverview: "Overview",
    tabPosts: "My Posts",
    tabSaved: "Saved & Liked",
    tabNotif: "Notifications",
    tabBadges: "Badges",
    lblProfFile: "Upload profile picture from device:",
    selectedFilePrefix: "Selected file:",
    lblProfName: "First Name:",
    lblProfSurname: "Last Name:",
    lblProfEmail: "Email Address:",
    lblProfPass: "New Password (At least 8 characters):",
    phProfPass: "Enter new password to change...",
    btnSaveProfile: "Save Changes",
    btnLogoutTxt: "Sign Out",
    toastProfileUpdated: "Profile changes saved!",
    lblMyPostsTitle: "My Created Announcements",
    btnAddPostDash: "+ Add New Post",
    noMyPostsText: "You haven't created any announcements yet.",
    btnDeletePost: "Delete",
    confirmDeletePost:
      "Are you sure you want to permanently delete this announcement?",
    toastPostDeleted: "Announcement deleted.",
    postModalHeader: "Add News, Announcement, or Competition",
    lblPostCat: "Section / Category:",
    postCatHintTitle:
      "Exam: tests & assessments; Club: student clubs; Competition: contests; Event: ceremonies & gatherings",
    optCatExam: "Exam",
    optCatClub: "Club",
    optCatComp: "Competition / Contest",
    optCatEvent: "Event",
    lblPostHeading: "Title (Max 150 characters):",
    phPostHeading: "Announcement title...",
    lblPostDeadline: "Deadline Date:",
    lblAllowEnrollText: 'Enable "Enroll" button for students?',
    lblPostMedia:
      "Media or Document File (Image, Video, PDF, DOCX, XLSX, TXT):",
    lblMediaHint:
      "You can upload images, videos, or documents in standard formats.",
    lblPostTagsHint: "Tags (Type a word and press ENTER):",
    phPostTags: "Type a tag and press Enter...",
    lblPostBody: "Detailed Content (Minimum 10 words required):",
    phPostBody: "Enter announcement details (at least 10 words)...",
    wordCountPrefix: "Words:",
    btnPublishPost: "Publish Announcement",
    errPostTitle: "Please enter an announcement title!",
    errPostWords:
      "Announcement content must be at least 10 words! Current word count:",
    toastPostPublished: "Announcement published successfully!",
    fieldsMainTitle: "Vocational Specialties Taught at Our Technicum",
    fieldsCat1: "Stage 1 (Based on 9th Grade) First 9 Specialties:",
    fieldsCat2: "Stage 2 (For 11th Grade Graduates!) 3 Specialties:",
    fItem1: "Tailor / Garment Maker",
    fItem2: "Tractor Operator & Machinist",
    fItem3: "Electrician",
    fItem4: "Welder",
    fItem5: "Solar Panel Installation and Maintenance",
    fItem6: "Automobile Repair and Maintenance",
    fItem7: "Hardware and Software Technician",
    fItem8: "Residential & Municipal Utilities Master",
    fItem9: "Hairdresser (Stylist)",
    fItem10: "Metalworking Technology",
    fItem11:
      "Design and Technology of Light Industry Products (by Production Type)",
    fItem12:
      "Installation, Operation, and Repair of Water Supply and Sewerage Systems",
    lblTabNurtech: "About NURTech",
    lblTabFaculty: "Staff",
    lblTabPrivacy: "Privacy Policy",
    lblTabHub: "Student Hub",
    txtAbTitle: "Welcome to Nurabad Technicum No. 1",
    txtAbSub:
      "Where Knowledge Meets Practice and Goals Turn into Opportunities.",
    txtAbH1: "Training Skilled Specialists for Tomorrow",
    txtAbP1:
      "At Nurabad Technicum No. 1, education goes far beyond traditional classrooms. We are a multidisciplinary institution dedicated to combining a strong academic foundation with hands-on practical training. Our goal is to turn every student into a competitive, adaptable, and career-ready professional.",
    txtAbH2: "Why Choose Our Technicum?",
    txtAbF1T: "Modern Laboratories & Workshops",
    txtAbF1D:
      "True mastery is built through practice. Our workshops are equipped with modern technical machinery and simulation tools.",
    txtAbF2T: "Experienced Teachers & Mentors",
    txtAbF2D:
      "Our instructors combine high academic standards with genuine care and support for every student.",
    txtAbF3T: "Supportive Lifelong Community",
    txtAbF3D:
      "The friendships and professional connections you build here stay with you throughout your entire career.",
    txtAbGradT: "Prepared for the Future",
    txtAbGradD: "Upon graduating from our technicum, you will gain:",
    txtGrad1T: "Recognized Diploma:",
    txtGrad1D:
      "An official credential certifying your knowledge and technical qualifications.",
    txtGrad2T: "Practical Experience:",
    txtGrad2D:
      "Real-world mastery gained through hands-on training in your field.",
    txtGrad3T: "Independence & Readiness:",
    txtGrad3D:
      "Full readiness to enter the workforce and earn an independent income immediately.",
    txtAbQuote:
      '"Your journey toward personal growth, practical mastery, and a successful career begins right here."',
    txtPrivTitle: "General Privacy & Data Protection Policy",
    txtPrivIntro:
      "Our portal is designed to unite our educational community, expand opportunities between students and faculty, and enhance the quality of education.",
    txtPrivR1T: "1. Multilingual Interface & Data Handling",
    txtPrivR1:
      "Our platform natively supports multiple languages so that every user can browse content in their preferred language. Your personal data is never sold or shared with unauthorized third parties.",
    txtPrivR2T: "2. No Advertising or Commercial Exploitation",
    txtPrivR2:
      "Personal details, emails, or announcements submitted by you are never sold to advertising companies or used for commercial brokerage.",
    txtPrivR3T: "3. Notifications & Cookie Permissions",
    txtPrivR3:
      "Allowing essential cookies enables timely announcements and notifications on your device. Data is used solely to improve system reliability and user experience.",
    txtPrivR4T: "4. Core Mission of the Platform",
    txtPrivR4:
      "The NURTech portal digitizes campus operations, fosters peer-to-peer student collaboration, and makes college life more productive and accessible.",
    lblFilterModalTitle: "Filter & Sort",
    lblFilterModalDesc: "Filter announcements by category and sort order",
    lblCatTitle: "Categories:",
    filtAll: "All",
    filtExam: "Exams",
    filtClub: "Clubs",
    filtComp: "Competitions",
    filtEvent: "Events",
    lblSortTitle: "Sort By:",
    sortNew: "Newest",
    sortLikes: "Most Liked",
    sortEnrolls: "Most Enrolled",
    sortViews: "Most Viewed",
    btnApplyFilter: "Apply Filter",
    lblDabSave: "Save",
    lblDabSaved: "Saved",
    lblActShare: "Share",
    lblActReport: "Report",
    lblViewsText: "views",
    lblCommentsHeader: "Comments",
    sortPopular: "Top",
    sortNewest: "Newest",
    phNewComment: "Add a comment...",
    btnSubmitComment: "Comment",
    noCommentsText: "No comments yet.",
    btnReply: "Reply",
    phReply: "Write a reply...",
    btnSendReply: "Send",
    lblShareModalTitle: "Share Announcement",
    lblShareModalDesc:
      "Share this announcement via social networks or copy the link:",
    lblCopyLink: "Copy Link",
    toastLinkCopied: "Link copied to clipboard!",
    lblReportModalTitle: "Report an Issue",
    lblReportModalDesc:
      "Describe the issue with this announcement or book in detail. Your report is sent directly to the administration.",
    phReportDesc: "Describe the issue...",
    btnSubmitReport: "Submit Report",
    lblSubtabSaved: "Saved Posts",
    lblSubtabLiked: "Liked Posts",
    noSavedPosts: "No saved announcements yet.",
    noLikedPosts: "No liked announcements yet.",
    authorPrefix: "Author:",
    lblNotifTitle: "Participants & Activity History",
    noNotifText: "No notifications yet.",
    lblBadgesTitle: "Popularity & Achievement Badges",
    lblBadgesDesc:
      "Your badges upgrade automatically as more students enroll in your announcements.",
    badgeUnlocked: "UNLOCKED",
    badgeLocked: "Locked",
    badgeTargetPrefix: "Goal:",
    badgeTargetSuffix: "participants",
    authLoginTitle: "Sign In",
    authRegisterTitle: "Create Account",
    txtNoAccount: "Don't have an account?",
    linkRegister: "Create account",
    txtHasAccount: "Already have an account?",
    linkLogin: "Sign in",
    txtOrAdmin: "or",
    txtAreYouAdmin: "Are you an Admin?",
    authAdminTitle: "Admin Sign In",
    txtAdminDesc: "Enter the administrator secret password to verify access:",
    lblAdminPass: "Admin Password:",
    btnAdminSubmit: "Sign In as Admin",
    linkAdminBack: "← Back to standard sign in",
    btnAddStaff: "+ Add Staff",
    confirmTitle: "Confirmation",
    confirmCancel: "Cancel",
    confirmOk: "Confirm",
    timeJustNow: "just now",
    timeMinsAgo: "min ago",
    timeHoursAgo: "hr ago",
    timeDaysAgo: "days ago",
    timeMonthsAgo: "mo ago",
    docLabel: "Document",
    deadlineLabel: "Deadline:",
    statViewsTooltip: "Total views across all your announcements",
    statLikesTooltip: "Total likes across all your announcements",
    statEnrollsTooltip: "Total students enrolled across all your announcements",
  },
  ru: {
    pageTitle: "NURTECH — Нурабадский техникум №1",
    brandSub: "Нурабадский техникум №1",
    navHome: "Главная",
    navNews: "Объявления",
    navLibrary: "Э-Библиотека",
    navAbout: "О нас",
    navNurtechInfo: "Что такое NURTech?",
    navFacultyInfo: "Сотрудники и преподаватели",
    navPrivacyInfo: "Политика конфиденциальности",
    navHubInfo: "Студенческий хаб",
    navContact: "Контакты",
    themeToggleTitle: "Сменить тему",
    heroBadge: "Официальный цифровой портал",
    heroTitle: "Центр практических знаний и профессий будущего",
    motto1H: "Выпуститеcь готовым специалистом",
    motto1P:
      "Получите практический опыт работы и будьте готовы к самостоятельному доходу.",
    motto2H: "Обретите уверенность в себе",
    motto2P: "Сегодняшние знания — завтрашний успех!",
    btnExplore: "Смотреть объявления",
    btnContact: "Связаться с нами",
    statStudents: "Количество учащихся",
    statWorkshops: "Учебные кабинеты",
    statTeachers: "Количество сотрудников",
    statEmployment: "Трудоустройство",
    statEditTitle: "Изменить показатель",
    statEditCancel: "Отмена",
    statEditSave: "Сохранить",
    statEditError: "Пожалуйста, введите корректное положительное число!",
    statEditSuccess: "Показатель успешно обновлён!",
    editPenTitle: "Редактировать",
    hubTitle: "Студенческое сообщество и Peer-to-Peer Хаб",
    hubSub: "Возможности, сотрудничество и обмен ресурсами",
    hubF1Title: "Маркетплейс талантов и навыков",
    hubF1Desc:
      "Отмечайте свои навыки и легко находите подходящих участников команды для проектов.",
    hubF2Title: "Конструктор команд и проектов",
    hubF2Desc:
      "Создавайте проекты с чёткими ролями для конкурсов или кружков и набирайте команду в один клик.",
    hubF3Title: "Инкубатор студенческих инициатив",
    hubF3Desc:
      "Продвигайте свои идеи. При наборе голосов ваша инициатива автоматически передаётся администрации.",
    hubF4Title: "Обмен ресурсами и инструментами",
    hubF4Desc:
      "Платформа для обмена оборудованием, учебными пособиями и быстрого поиска потерянных вещей.",
    hubF5Title: "Микро-наставничество и академическая сеть",
    hubF5Desc:
      "Помогайте друг другу в сложных темах и накапливайте волонтёрские часы для получения сертификатов.",
    newsTitle: "Последние объявления и новости",
    newsSub: "Самые важные новости из жизни техникума",
    annSearchPlaceholder: "Поиск по заголовку, тексту или ключевому слову...",
    lblFilterBtn: "Фильтр и сортировка",
    noAnnouncementsText: "Активных объявлений пока не найдено.",
    libTitle: "Цифровая библиотека и электронные пособия",
    libSub: "База электронных книг информационно-ресурсного центра техникума",
    libSearchPlaceholder:
      "Поиск по названию книги, автору или ключевому слову...",
    libCatAll: "Все категории",
    libCatIt: "Программирование и IT",
    libCatTech: "Техника и инженерия",
    libCatScience: "Точные науки",
    libCatLiterature: "Художественная литература",
    libCatOther: "Другие пособия",
    noBooksText: "Книги в библиотеке не найдены.",
    bookDownloadedTimes: "скачиваний",
    bookDownloadBtn: "Скачать",
    bookDabDownloadBtn: "Скачать книгу",
    bookAuthorPrefix: "Автор:",
    bookViewsWord: "просмотров",
    bookDownloadsWord: "скачиваний",
    bookCommentsHeader: "Отзывы и комментарии",
    bookCommentPlaceholder: "Напишите ваш отзыв о книге...",
    noBookCommentsText:
      "Комментариев пока нет. Оставьте первый отзыв об этой книге!",
    bookModalTitle: "Добавить книгу (Э-Библиотека)",
    lblBookTitle: "Название книги:",
    phBookTitle: "Например: Основы программирования на Python",
    lblBookAuthor: "Автор:",
    phBookAuthor: "Например: Марк Лутц",
    lblBookCategory: "Категория:",
    lblBookFile: "Файл книги (PDF или Word - Обязательно):",
    lblBookImage: "Обложка / Изображение (Необязательно):",
    lblBookDesc: "Описание:",
    phBookDesc: "Краткое описание книги...",
    btnSaveBook: "Загрузить книгу",
    errBookFields: "Пожалуйста, заполните все обязательные поля!",
    errBookFile: "Пожалуйста, выберите файл книги (PDF или Word)!",
    toastBookAdded: "Книга успешно загружена и добавлена в библиотеку!",
    confirmDeleteBook:
      "Вы уверены, что хотите удалить эту книгу из библиотеки?",
    toastBookDeleted: "Книга удалена из библиотеки.",
    facultyTitle: "Сотрудники и преподаватели техникума",
    facultySub: "Список нашего коллектива и занимаемых должностей",
    searchPlaceholder: "Поиск сотрудника по имени или должности...",
    noStaffFound: "Сотрудники не найдены.",
    pageLabel: "Страница",
    prevTitle: "Назад",
    nextTitle: "Вперёд",
    staffModalTitle: "Добавить сотрудника",
    lblStaffName: "Ф.И.О. (Полное имя):",
    phStaffName: "Например: Каримов Азизбек",
    lblStaffRole: "Должность:",
    phStaffRole: "Например: Преподаватель информатики",
    lblStaffDesc: "Описание / Дополнительная информация:",
    phStaffDesc: "Информация о сотруднике...",
    btnSaveStaff: "Сохранить",
    errStaffFields: "Пожалуйста, введите имя и должность сотрудника!",
    toastStaffAdded: "Новый сотрудник добавлен в список!",
    confirmDeleteStaff: "Вы уверены, что хотите удалить этого сотрудника?",
    toastStaffDeleted: "Сотрудник удалён из списка.",
    lblFacultyModalDesc: "Описание должности и информация:",
    defaultFacultyDesc:
      "Дополнительное описание для данного сотрудника пока не добавлено.",
    contactTitle: "Свяжитесь с нами",
    contactSub: "Есть вопросы? Оставьте нам сообщение",
    lblAddress: "Адрес (Google Карты):",
    txtAddress:
      "г. Нурабад, Самаркандская область, Узбекистан (Нурабадский техникум)",
    mapClickHint: "Нажмите, чтобы открыть на карте",
    tgClickHint: "Перейти в Telegram-канал",
    lblPhone: "Телефон:",
    lblTelegram: "Telegram-канал:",
    phFormName: "Ваше имя",
    phFormEmail: "Ваш адрес электронной почты (Email)",
    phFormMsg: "Ваше сообщение или обращение (максимум 2000 символов)...",
    btnSend: "Отправить сообщение",
    footerText: "© 2026 NURTECH — Нурабадский техникум №1. Все права защищены.",
    cookieTitle: "Конфиденциальность и Cookie",
    cookieDesc:
      "Разрешите использование файлов cookie для полноценной работы портала, получения уведомлений и улучшения пользовательского опыта.",
    cookieAll: "Принять все",
    cookieNecessary: "Только необходимые",
    btnAuth: "Войти",
    profileManageTitle: "Управление профилем",
    btnAddPost: "Добавить новость или объявление",
    btnAddBook: "+ Добавить книгу",
    finishedText: "ЗАВЕРШЕНО",
    lblLogEmail: "Электронная почта:",
    phLogEmail: "email@domain.uz или librarian1",
    lblLogPass: "Пароль:",
    btnLoginSubmit: "Войти в систему",
    lblRegName: "Имя:",
    phRegName: "Например: Азизбек",
    lblRegSurname: "Фамилия:",
    phRegSurname: "Например: Каримов",
    lblRegEmail: "Электронная почта:",
    lblRegPass: "Пароль (минимум 8 символов):",
    lblRegRole: "Тип пользователя:",
    optRoleStudent: "Учащийся",
    optRoleFaculty: "Сотрудник / Преподаватель",
    optRoleAdmin: "Администратор",
    optRoleLibrarian: "Библиотекарь",
    btnRegSubmit: "Создать аккаунт",
    errWrongLogin: "Неверная электронная почта или пароль!",
    errWrongAdminPass: "Неверный пароль администратора! Попробуйте снова.",
    errShortPass: "Пароль должен содержать не менее 8 символов!",
    errEmailExists: "Аккаунт с этой электронной почтой уже существует!",
    errFillAllFields: "Пожалуйста, заполните все обязательные поля!",
    tabOverview: "Общее",
    tabPosts: "Мои объявления",
    tabSaved: "Сохранённое и понравившееся",
    tabNotif: "Уведомления",
    tabBadges: "Значки",
    lblProfFile: "Загрузить фото профиля с устройства:",
    selectedFilePrefix: "Выбранный файл:",
    lblProfName: "Имя:",
    lblProfSurname: "Фамилия:",
    lblProfEmail: "Электронная почта:",
    lblProfPass: "Новый пароль (минимум 8 символов):",
    phProfPass: "Введите новый пароль для смены...",
    btnSaveProfile: "Сохранить изменения",
    btnLogoutTxt: "Выйти из аккаунта",
    toastProfileUpdated: "Изменения профиля сохранены!",
    lblMyPostsTitle: "Мои созданные объявления",
    btnAddPostDash: "+ Новое объявление",
    noMyPostsText: "Вы ещё не создавали объявлений.",
    btnDeletePost: "Удалить",
    confirmDeletePost:
      "Вы уверены, что хотите безвозвратно удалить это объявление?",
    toastPostDeleted: "Объявление удалено.",
    postModalHeader: "Добавить новость, объявление или конкурс",
    lblPostCat: "Раздел / Категория:",
    postCatHintTitle:
      "Экзамен: тесты и проверки; Кружок: секции; Конкурс: соревнования; Мероприятие: события",
    optCatExam: "Экзамен",
    optCatClub: "Кружок",
    optCatComp: "Конкурс / Соревнование",
    optCatEvent: "Мероприятие",
    lblPostHeading: "Заголовок (максимум 150 символов):",
    phPostHeading: "Заголовок объявления...",
    lblPostDeadline: "Дата окончания:",
    lblAllowEnrollText: "Включить кнопку «Записаться» для учащихся?",
    lblPostMedia: "Медиа или документ (Фото, Видео, PDF, DOCX, XLSX, TXT):",
    lblMediaHint:
      "Вы можете загружать изображения, видео или документы стандартных форматов.",
    lblPostTagsHint: "Теги (введите слово и нажмите ENTER):",
    phPostTags: "Введите тег и нажмите Enter...",
    lblPostBody: "Подробное содержание (минимум 10 слов):",
    phPostBody: "Введите текст объявления (не менее 10 слов)...",
    wordCountPrefix: "Слов:",
    btnPublishPost: "Опубликовать объявление",
    errPostTitle: "Пожалуйста, введите заголовок объявления!",
    errPostWords:
      "Текст объявления должен содержать не менее 10 слов! Текущее количество слов:",
    toastPostPublished: "Объявление успешно опубликовано!",
    fieldsMainTitle: "Специальности, преподаваемые в нашем техникуме",
    fieldsCat1: "1-й этап (на базе 9 классов) — первые 9 направлений:",
    fieldsCat2: "2-й этап (для выпускников 11 классов!) — 3 направления:",
    fItem1: "Портной (Швея)",
    fItem2: "Тракторист-машинист",
    fItem3: "Электромонтёр",
    fItem4: "Сварщик",
    fItem5: "Монтаж и обслуживание солнечных панелей",
    fItem6: "Ремонт и техническое обслуживание автомобилей",
    fItem7: "Наладчик аппаратного и программного обеспечения",
    fItem8: "Мастер жилищно-коммунального хозяйства",
    fItem9: "Парикмахер (Модельер)",
    fItem10: "Технология обработки металлов",
    fItem11:
      "Конструирование и технология изделий лёгкой промышленности (по видам производства)",
    fItem12: "Монтаж, эксплуатация и ремонт систем водоснабжения и канализации",
    lblTabNurtech: "О NURTech",
    lblTabFaculty: "Сотрудники",
    lblTabPrivacy: "Политика конфиденциальности",
    lblTabHub: "Студенческий хаб",
    txtAbTitle: "Добро пожаловать в Нурабадский техникум №1",
    txtAbSub:
      "Место, где знания соединяются с практикой, а цели превращаются в возможности.",
    txtAbH1: "Готовим квалифицированных специалистов будущего",
    txtAbP1:
      "В Нурабадском техникуме №1 обучение выходит далеко за рамки обычных школьных занятий. Мы — многопрофильное учебное заведение, сочетающее прочную академическую базу с реальной практикой. Наша цель — сделать каждого студента конкурентоспособным и востребованным профессионалом на современном рынке труда.",
    txtAbH2: "Почему выбирают наш техникум?",
    txtAbF1T: "Современные лаборатории и мастерские",
    txtAbF1D:
      "Настоящее мастерство формируется только на практике. Наши мастерские оснащены современным оборудованием и тренажёрами.",
    txtAbF2T: "Опытные преподаватели и наставники",
    txtAbF2D:
      "Наши педагоги сочетают высокую требовательность с заботой и поддержкой каждого учащегося.",
    txtAbF3T: "Дружное сообщество на всю жизнь",
    txtAbF3D:
      "Дружба и профессиональные связи, приобретённые здесь, останутся с вами на протяжении всей карьеры.",
    txtAbGradT: "Готовность к будущему",
    txtAbGradD: "Окончив обучение у нас, вы получите:",
    txtGrad1T: "Признанный диплом:",
    txtGrad1D:
      "Официальный документ, подтверждающий ваши знания и квалификацию.",
    txtGrad2T: "Практический опыт:",
    txtGrad2D:
      "Реальные навыки, полученные на практических занятиях по вашей специальности.",
    txtGrad3T: "Самостоятельность и готовность:",
    txtGrad3D:
      "Полную готовность сразу выйти на рынок труда и получать самостоятельный доход.",
    txtAbQuote:
      "«Ваш путь к личностному росту, практическому мастерству и успешной карьере начинается именно здесь».",
    txtPrivTitle: "Общая политика конфиденциальности и защиты данных",
    txtPrivIntro:
      "Наш портал создан для сплочения образовательного сообщества, расширения возможностей учащихся и преподавателей, а также повышения качества образования.",
    txtPrivR1T: "1. Многоязычный интерфейс и обработка данных",
    txtPrivR1:
      "Платформа поддерживает несколько языков, чтобы каждый пользователь мог удобно работать на выбранном языке. Ваши личные данные никогда не продаются и не передаются посторонним лицам.",
    txtPrivR2T: "2. Отказ от рекламы и коммерческого использования",
    txtPrivR2:
      "Введённые вами личные данные, адреса электронной почты или объявления никогда не продаются рекламным компаниям и не используются в коммерческих целях.",
    txtPrivR3T: "3. Уведомления и разрешения Cookie",
    txtPrivR3:
      "Разрешение необходимых файлов cookie позволяет получать актуальные объявления и уведомления на ваше устройство. Данные используются исключительно для повышения стабильности и удобства работы.",
    txtPrivR4T: "4. Основная миссия платформы",
    txtPrivR4:
      "Портал NURTech цифровизирует образовательный процесс, развивает сотрудничество между студентами и делает учебную среду более удобной и продуктивной.",
    lblFilterModalTitle: "Фильтр и сортировка",
    lblFilterModalDesc:
      "Отсортируйте объявления по нужной категории и популярности",
    lblCatTitle: "Категории:",
    filtAll: "Все",
    filtExam: "Экзамены",
    filtClub: "Кружки",
    filtComp: "Конкурсы",
    filtEvent: "Мероприятия",
    lblSortTitle: "Порядок сортировки:",
    sortNew: "Сначала новые",
    sortLikes: "По лайкам",
    sortEnrolls: "По записям",
    sortViews: "По просмотрам",
    btnApplyFilter: "Применить фильтр",
    lblDabSave: "Сохранить",
    lblDabSaved: "Сохранено",
    lblActShare: "Поделиться",
    lblActReport: "Пожаловаться",
    lblViewsText: "просмотров",
    lblCommentsHeader: "Комментарии",
    sortPopular: "Популярные",
    sortNewest: "Сначала новые",
    phNewComment: "Оставьте комментарий...",
    btnSubmitComment: "Отправить",
    noCommentsText: "Комментариев пока нет.",
    btnReply: "Ответить",
    phReply: "Написать ответ...",
    btnSendReply: "Отправить",
    lblShareModalTitle: "Поделиться объявлением",
    lblShareModalDesc:
      "Поделитесь этим объявлением в социальных сетях или скопируйте ссылку:",
    lblCopyLink: "Копировать ссылку",
    toastLinkCopied: "Ссылка скопирована!",
    lblReportModalTitle: "Сообщить о проблеме",
    lblReportModalDesc:
      "Подробно опишите проблему с этим объявлением или книгой. Ваше сообщение будет отправлено напрямую администрации.",
    phReportDesc: "Опишите детали проблемы...",
    btnSubmitReport: "Отправить жалобу",
    lblSubtabSaved: "Сохранённые объявления",
    lblSubtabLiked: "Понравившиеся объявления",
    noSavedPosts: "Сохранённых объявлений пока нет.",
    noLikedPosts: "Понравившихся объявлений пока нет.",
    authorPrefix: "Автор:",
    lblNotifTitle: "Участники и история активности",
    noNotifText: "Уведомлений пока нет.",
    lblBadgesTitle: "Значки популярности и достижений",
    lblBadgesDesc:
      "Ваши значки повышаются по мере того, как всё больше учащихся записывается на ваши объявления.",
    badgeUnlocked: "ПОЛУЧЕНО",
    badgeLocked: "Заблокировано",
    badgeTargetPrefix: "Цель:",
    badgeTargetSuffix: "участников",
    authLoginTitle: "Вход в систему",
    authRegisterTitle: "Создать аккаунт",
    txtNoAccount: "Нет аккаунта?",
    linkRegister: "Создать аккаунт",
    txtHasAccount: "Уже есть аккаунт?",
    linkLogin: "Войти",
    txtOrAdmin: "или",
    txtAreYouAdmin: "Вы администратор?",
    authAdminTitle: "Вход для администратора",
    txtAdminDesc:
      "Введите секретный пароль администратора для подтверждения прав:",
    lblAdminPass: "Пароль администратора:",
    btnAdminSubmit: "Войти как администратор",
    linkAdminBack: "← Вернуться к обычному входу",
    btnAddStaff: "+ Добавить сотрудника",
    confirmTitle: "Подтверждение",
    confirmCancel: "Отмена",
    confirmOk: "Подтвердить",
    timeJustNow: "только что",
    timeMinsAgo: "мин. назад",
    timeHoursAgo: "ч. назад",
    timeDaysAgo: "дн. назад",
    timeMonthsAgo: "мес. назад",
    docLabel: "Документ",
    deadlineLabel: "Срок окончания:",
    statViewsTooltip: "Общее количество просмотров ваших объявлений",
    statLikesTooltip: "Общее количество лайков ваших объявлений",
    statEnrollsTooltip: "Общее количество записавшихся на ваши объявления",
  },
};

function getDict() {
  return translations[currentLang] || translations.uz;
}

/**
 * Escape HTML special characters to prevent XSS.
 * Use this for any user-generated content inserted into innerHTML.
 */

function escapeHtml(str) {
  if (str == null) return "";

  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Non-intrusive Toast Banner (replaces all alert() calls)
function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;
  const toast = document.createElement("div");
  toast.className = `toast-item ${type}`;
  const iconClass =
    type === "error" ? "fa-solid fa-circle-xmark" : "fa-solid fa-circle-check";
  toast.innerHTML = `<i class="${iconClass}"></i><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(8px)";
    setTimeout(() => toast.remove(), 250);
  }, 3200);
}

// Custom Confirmation Modal (replaces all confirm() calls)
let confirmCallback = null;
function showConfirmModal(message, onConfirm) {
  const dict = getDict();
  document.getElementById("confirm-modal-title").textContent =
    dict.confirmTitle;
  document.getElementById("confirm-modal-message").textContent = message;
  document.getElementById("confirm-modal-cancel").textContent =
    dict.confirmCancel;
  document.getElementById("confirm-modal-ok").textContent = dict.confirmOk;
  confirmCallback = onConfirm;
  document.getElementById("confirm-modal").classList.add("open");
}

function closeConfirmModal() {
  document.getElementById("confirm-modal").classList.remove("open");
  confirmCallback = null;
}

function setInlineError(elementId, message, inputIds = []) {
  const el = document.getElementById(elementId);
  if (el) {
    if (message) {
      el.textContent = message;
      el.classList.add("visible");
    } else {
      el.textContent = "";
      el.classList.remove("visible");
    }
  }
  inputIds.forEach((id) => {
    const inp = document.getElementById(id);
    if (inp) {
      if (message) inp.classList.add("input-error");
      else inp.classList.remove("input-error");
    }
  });
}

function clearAllInlineErrors() {
  document.querySelectorAll(".inline-error-text").forEach((el) => {
    el.textContent = "";
    el.classList.remove("visible");
  });
  document
    .querySelectorAll(".input-error")
    .forEach((el) => el.classList.remove("input-error"));
}

const defaultFacultyMembers = [
  {
    id: 1,
    name: "Muxammadiyev Asadjon Bekmurodovich",
    role: "Direktor",
    description:
      "Texnikum direktori. Barcha o'quv va ma'muriy jarayonlarga rahbarlik qiladi.",
  },
  {
    id: 2,
    name: "Hasanov Abduqadir Ismoilovich",
    role: "DOʻIBO",
    description:
      "O'quv ishlari bo'yicha direktor o'rinbosari. Akademik dasturlar va dars jadvalini muvofiqlashtiradi.",
  },
  {
    id: 3,
    name: "Xudayorov Nurbek Muxamadiyevich",
    role: "YOBIBDO",
    description:
      "Yoshlar bilan ishlash bo'yicha direktor o'rinbosari. Talabalar ijtimoiy faolligi va tadbirlarni boshqaradi.",
  },
  {
    id: 4,
    name: "Amirkulov Salim Murodullayevich",
    role: "ICHTBDO",
    description:
      "Ishlab chiqarish ta'limi bo'yicha direktor o'rinbosari. Amaliyot va kasbiy tayyorgarlikka mas'ul.",
  },
  {
    id: 5,
    name: "Xolbayev Ilyos Baxodirovich",
    role: "Xoʻjalik mudiri",
    description: "Moddiy-texnik baza va xo'jalik ishlarini boshqaradi.",
  },
  {
    id: 6,
    name: "Javburiyev Raxmatulla Narzullayevich",
    role: "Bosh hisobchi",
    description: "Texnikumning moliyaviy va buxgalteriya faoliyatini yuritadi.",
  },
  {
    id: 7,
    name: "Xalikulov Xurram Xursanovich",
    role: "Harbiy ta'lim rahbari",
    description:
      "Yoshlarni vatanparvarlik ruhida tarbiyalash va boshlang'ich harbiy tayyorgarlik.",
  },
  {
    id: 8,
    name: "Sag'dullayev Ozodjon Xushvaqt o'g'li",
    role: "Jismoniy tarbiya rahbari",
    description:
      "Sport musobaqalari va sog'lom turmush tarbiyasini targ'ib qiladi.",
  },
  {
    id: 9,
    name: "Allayarov Rabim Muminovich",
    role: "Bosh usta",
    description: "Ishlab chiqarish ustaxonalari bosh ustasi.",
  },
  {
    id: 10,
    name: "Mavlonova Shoxida Iskandarovna",
    role: "Psixolog",
    description:
      "O'quvchilar bilan psixologik maslahat va treninglar o'tkazadi.",
  },
  {
    id: 11,
    name: "Xurramova Sevara Uyg'unovna",
    role: "Uslubchi",
    description:
      "O'quv-uslubiy ishlar va pedagogik faoliyatni muvofiqlashtiradi.",
  },
  {
    id: 12,
    name: "Amanov Tashkent Parchayevich",
    role: "Bo'lim boshlig'i",
    description: "Bo'lim rahbari va mas'ul xodim.",
  },
  {
    id: 13,
    name: "Xushvaqova Yulduz Urozovna",
    role: "Ta'lim sifati nazorati bo`limi boshlig'i",
    description: "Ta'lim sifatini baholash va monitoring qiladi.",
  },
  {
    id: 14,
    name: "Jurayeva Zulfira Boymurotovna",
    role: "Kimyo o'qituvchi",
    description: "Kimyo fanidan chuqurlashtirilgan darslar beradi.",
  },
  {
    id: 15,
    name: "Toshtemirova Sunbula Jamoliddin qizi",
    role: "Fizika va astronomiya oʻqituvchi",
    description: "Fizika va astronomiya fanlari o'qituvchisi.",
  },
  {
    id: 16,
    name: "Ungbayeva Dilafroʻz Musulmanovna",
    role: "Ingliz tili oʻqituvchi",
    description: "Ingliz tili va xorijiy tillar kafedrasi o'qituvchisi.",
  },
  {
    id: 17,
    name: "Egamberdiyeva Dilyora Jamol qizi",
    role: "Ingliz tili o'qituvchi",
    description: "Ingliz tili fani o'qituvchisi.",
  },
  {
    id: 18,
    name: "Yuldashov Jasur Dustqul o`g`li",
    role: "Ingliz tili oʻqituvchi",
    description: "IELTS va ingliz tili o'qituvchisi.",
  },
  {
    id: 19,
    name: "Xushbaxtova Gulfina Sirojiddin qizi",
    role: "Ingliz tili o'qituvchi",
    description: "Ingliz tili o'qituvchisi va metodist.",
  },
  {
    id: 20,
    name: "Urolova Nuriya Abduvoxid qizi",
    role: "Ingliz tili oʻqituvchi",
    description: "Ingliz tili o'qituvchisi.",
  },
];

let facultyMembers =
  JSON.parse(localStorage.getItem("nurtech-faculty")) || defaultFacultyMembers;
let siteStats = JSON.parse(localStorage.getItem("nurtech-stats")) || {
  students: 850,
  workshops: 40,
  teachers: 89,
  employment: 94,
};
let sampleAnnouncements = [];
let sampleBooks = JSON.parse(localStorage.getItem("nurtech-books")) || [
  {
    id: "book_1",
    title: "Python Dasturlash Asoslari",
    author: "Mark Lutz",
    category: "it",
    description:
      "Python tilini noldan boshlab o'rganish uchun eng mashhur va mukammal qo'llanma.",
    fileUrl: "#",
    fileName: "Python_Asoslari.pdf",
    imageUrl:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&auto=format&fit=crop&q=60",
    authorName: "Admin",
    authorEmail: "admin@nurtech.uz",
    timestamp: Date.now() - 86400000 * 2,
    date: "2026-03-01",
    views: 142,
    downloads: 89,
    likes: [],
    savedBy: [],
    comments: [],
    commentSort: "popular",
  },
  {
    id: "book_2",
    title: "Fizika Fanidan Masalalar To'plami",
    author: "G. S. Landsberg",
    category: "science",
    description:
      "Texnikum o'quvchilari uchun fizika fanidan chuqurlashtirilgan masalalar va ularning yechimlari.",
    fileUrl: "#",
    fileName: "Fizika_Masalalar.pdf",
    imageUrl:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=500&auto=format&fit=crop&q=60",
    authorName: "Kutubxonachi",
    authorEmail: "librarian1@nurtech.uz",
    timestamp: Date.now() - 86400000 * 5,
    date: "2026-02-24",
    views: 98,
    downloads: 56,
    likes: [],
    savedBy: [],
    comments: [],
    commentSort: "popular",
  },
];

let registeredUsers = JSON.parse(localStorage.getItem("nurtech-users")) || [
  {
    firstName: "Admin",
    lastName: "",
    email: "admin@nurtech.uz",
    password: "admin9admin",
    role: "admin",
    isAdmin: true,
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Admin",
  },
  {
    firstName: "Kutubxonachi",
    lastName: "1",
    email: "librarian1@nurtech.uz",
    password: "librarian1",
    role: "librarian",
    isLibrarian: true,
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Librarian",
  },
];

let currentUser =
  JSON.parse(localStorage.getItem("nurtech-current-user")) || null;
let currentLang = localStorage.getItem("nurtech-lang") || "uz";
if (!translations[currentLang]) currentLang = "uz";
let currentSort = "newest";
let currentFilter = "all";
let facultyCurrentPage = 0;
const facultyPerPage = 12;

let currentTagList = [];
let activeActiveModalPostId = null;
let activeModalBookId = null;

function isAdminUser(authorEmail, isExplicitAdmin) {
  if (
    isExplicitAdmin === true ||
    authorEmail === "admin@nurtech.uz" ||
    authorEmail === "librarian1@nurtech.uz"
  )
    return true;
  if (
    currentUser &&
    (currentUser.isAdmin === true ||
      currentUser.email === "admin@nurtech.uz" ||
      currentUser.email === "librarian1@nurtech.uz")
  ) {
    if (!authorEmail || authorEmail === currentUser.email) return true;
  }
  const foundUser = registeredUsers.find((u) => u.email === authorEmail);
  if (
    foundUser &&
    (foundUser.isAdmin === true ||
      foundUser.email === "admin@nurtech.uz" ||
      foundUser.email === "librarian1@nurtech.uz")
  )
    return true;
  return false;
}

function isLibrarianUser() {
  return Boolean(
    currentUser &&
    (currentUser.isLibrarian === true ||
      currentUser.role === "librarian" ||
      currentUser.email === "librarian1@nurtech.uz" ||
      isAdminUser()),
  );
}

function getSilverCheckmarkHtml(isUserAdmin) {
  if (!isUserAdmin) return "";
  return `<i class="fa-solid fa-circle-check admin-badge-icon" title="Verified Administrator"></i>`;
}

function saveFacultyToStorage() {
  localStorage.setItem("nurtech-faculty", JSON.stringify(facultyMembers));
}

function saveBooksToStorage() {
  try {
    localStorage.setItem("nurtech-books", JSON.stringify(sampleBooks));
  } catch (e) {
    console.warn("Supabase/Local fallback triggered due to storage limits:", e);
  }
}

function saveStatsToStorage() {
  localStorage.setItem("nurtech-stats", JSON.stringify(siteStats));
}

function applyStatsTargetsToDOM() {
  const sEl = document.getElementById("stat-num-students");
  const wEl = document.getElementById("stat-num-workshops");
  const tEl = document.getElementById("stat-num-teachers");
  const eEl = document.getElementById("stat-num-employment");

  if (sEl) sEl.setAttribute("data-target", siteStats.students);
  if (wEl) wEl.setAttribute("data-target", siteStats.workshops);
  if (tEl) tEl.setAttribute("data-target", siteStats.teachers);
  if (eEl) eEl.setAttribute("data-target", siteStats.employment);
}

function renderStatsImmediate() {
  const sEl = document.getElementById("stat-num-students");
  const wEl = document.getElementById("stat-num-workshops");
  const tEl = document.getElementById("stat-num-teachers");
  const eEl = document.getElementById("stat-num-employment");

  if (sEl) sEl.innerText = siteStats.students;
  if (wEl) wEl.innerText = "+" + siteStats.workshops;
  if (tEl) tEl.innerText = siteStats.teachers;
  if (eEl) eEl.innerText = siteStats.employment + "%";
}

// Opens sleek modal instead of browser prompt()
function editStatValue(statKey) {
  if (!isAdminUser()) return;
  const dict = getDict();
  const labels = {
    students: dict.statStudents,
    workshops: dict.statWorkshops,
    teachers: dict.statTeachers,
    employment: dict.statEmployment,
  };
  document.getElementById("stat-edit-key").value = statKey;
  document.getElementById("stat-edit-title").textContent = dict.statEditTitle;
  document.getElementById("stat-edit-label").textContent = labels[statKey];
  document.getElementById("stat-edit-cancel").textContent = dict.statEditCancel;
  document.getElementById("stat-edit-save").textContent = dict.statEditSave;
  document.getElementById("stat-edit-input").value = siteStats[statKey];
  setInlineError("stat-edit-error", "", ["stat-edit-input"]);
  document.getElementById("stat-edit-modal").classList.add("open");
  setTimeout(() => document.getElementById("stat-edit-input").focus(), 50);
}

async function fetchAnnouncementsFromSupabase() {
  const localSaved = JSON.parse(localStorage.getItem("nurtech-announcements"));
  if (!supabaseClient) {
    if (localSaved) sampleAnnouncements = localSaved;
    renderAnnouncements();
    return;
  }

  try {
    const { data, error } = await supabaseClient
      .from("announcements")
      .select("*")
      .order("created_at", { ascending: false });

    if (error || !data) {
      throw new Error("Supabase fetch error or quota exceeded");
    }

    sampleAnnouncements = data.map((item) => ({
      id: item.id,
      type: item.type || "competition",
      timestamp: item.created_at
        ? new Date(item.created_at).getTime()
        : Date.now(),
      date: item.created_at
        ? item.created_at.split("T")[0]
        : new Date().toISOString().split("T")[0],
      author: item.author || "Admin",
      authorEmail: item.author_email || "",
      isAdminPost:
        item.author_email === "admin@nurtech.uz" || item.is_admin === true,
      title: item.title,
      text: item.text,
      views: item.views || 0,
      likes: item.likes || [],
      enrolled: item.enrolled || [],
      comments: item.comments || [],
      media: item.media || [],
      tags: item.tags || [],
      deadline: item.deadline || null,
      allowEnroll: item.allow_enroll ?? true,
      savedBy: item.savedBy || [],
      commentSort: item.commentSort || "popular",
    }));
  } catch (err) {
    if (localSaved) sampleAnnouncements = localSaved;
  }
  renderAnnouncements();
}

document.addEventListener("DOMContentLoaded", () => {
  applyStatsTargetsToDOM();
  initTheme();
  initLanguage();
  initCounterAnimation();
  checkAuthSession();
  checkCookieConsent();
  initMottoCarousel();
  initModalBackdropListeners();
  renderBooks();
  fetchStatsFromSupabase();
  fetchFacultyFromSupabase();
  fetchUsersFromSupabase();
  fetchAnnouncementsFromSupabase();
  fetchBooksFromSupabase();

  document
    .getElementById("theme-toggle")
    .addEventListener("click", toggleTheme);
  document
    .getElementById("lang-select")
    .addEventListener("change", (e) => setLanguage(e.target.value));
  document
    .getElementById("mobile-toggle")
    .addEventListener("click", () =>
      document.getElementById("nav-menu").classList.toggle("open"),
    );

  document
    .getElementById("btn-cookie-all")
    .addEventListener("click", () => acceptCookies("all"));
  document
    .getElementById("btn-cookie-necessary")
    .addEventListener("click", () => acceptCookies("necessary"));

  // Confirm modal handlers
  document
    .getElementById("confirm-modal-close")
    .addEventListener("click", closeConfirmModal);
  document
    .getElementById("confirm-modal-cancel")
    .addEventListener("click", closeConfirmModal);
  document.getElementById("confirm-modal-ok").addEventListener("click", () => {
    if (typeof confirmCallback === "function") confirmCallback();
    closeConfirmModal();
  });

  // Stat edit modal handlers
  document
    .getElementById("stat-edit-close")
    .addEventListener("click", () =>
      document.getElementById("stat-edit-modal").classList.remove("open"),
    );
  document
    .getElementById("stat-edit-cancel")
    .addEventListener("click", () =>
      document.getElementById("stat-edit-modal").classList.remove("open"),
    );
  document
    .getElementById("stat-edit-form")
    .addEventListener("submit", handleStatEditSubmit);

  const searchInput = document.getElementById("announcement-search");
  if (searchInput) {
    let debounceTimer;
    searchInput.addEventListener("input", () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        renderAnnouncements();
      }, 250);
    });
  }

  const librarySearch = document.getElementById("library-search");
  if (librarySearch) {
    librarySearch.addEventListener("input", () => renderBooks());
  }
  const libraryCat = document.getElementById("library-filter-category");
  if (libraryCat) {
    libraryCat.addEventListener("change", () => renderBooks());
  }

  const filterBtn = document.getElementById("btn-open-filter-modal");
  if (filterBtn) {
    filterBtn.addEventListener("click", () => {
      document.getElementById("filter-modal").classList.add("open");
    });
  }

  document.querySelectorAll(".filter-opt-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      document
        .querySelectorAll(".filter-opt-btn")
        .forEach((b) => b.classList.remove("active"));
      e.target.classList.add("active");
      currentFilter = e.target.getAttribute("data-filter");
    });
  });

  document.querySelectorAll(".sort-opt-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      document
        .querySelectorAll(".sort-opt-btn")
        .forEach((b) => b.classList.remove("active"));
      e.target.classList.add("active");
      currentSort = e.target.getAttribute("data-sort");
    });
  });

  const applyFilterBtn = document.getElementById("btn-apply-filter");
  if (applyFilterBtn) {
    applyFilterBtn.addEventListener("click", () => {
      document.getElementById("filter-modal").classList.remove("open");
      renderAnnouncements();
    });
  }

  document
    .getElementById("post-type")
    .addEventListener("change", handleCategoryChange);

  const tagInput = document.getElementById("tag-single-input");
  if (tagInput) {
    tagInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const val = tagInput.value.trim().replace(/#/g, "");
        if (val && !currentTagList.includes(val)) {
          currentTagList.push(val);
          renderTagChips();
          tagInput.value = "";
        }
      }
    });
  }

  const postTextarea = document.getElementById("post-text");
  if (postTextarea) {
    postTextarea.addEventListener("input", (e) => {
      const dict = getDict();
      const text = e.target.value.trim();
      const words = text ? text.split(/\s+/).length : 0;
      const badge = document.getElementById("word-count-badge");
      badge.textContent = `${dict.wordCountPrefix} ${words} / 10`;
      badge.style.color = words < 10 ? "#ef4444" : "#10b981";
      if (words >= 10) {
        setInlineError("post-form-error", "", ["post-text"]);
      }
    });
  }

  const newCommentInput = document.getElementById("new-comment-input");
  if (newCommentInput) {
    newCommentInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleAddComment();
      }
    });
  }

  const bookCommentInput = document.getElementById("book-new-comment-input");
  if (bookCommentInput) {
    bookCommentInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleAddBookComment();
      }
    });
  }

  document.getElementById("faculty-search").addEventListener("input", (e) => {
    facultyCurrentPage = 0;
    renderFaculty(e.target.value);
  });

  document.getElementById("faculty-prev").addEventListener("click", () => {
    if (facultyCurrentPage > 0) {
      facultyCurrentPage--;
      renderFaculty(document.getElementById("faculty-search").value);
    }
  });

  document.getElementById("faculty-next").addEventListener("click", () => {
    const q = document.getElementById("faculty-search").value.toLowerCase();
    let filtered = facultyMembers;
    if (q) {
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(q) || p.role.toLowerCase().includes(q),
      );
    }
    const maxPages = Math.ceil(filtered.length / facultyPerPage);
    if (facultyCurrentPage < maxPages - 1) {
      facultyCurrentPage++;
      renderFaculty(document.getElementById("faculty-search").value);
    }
  });

  document
    .getElementById("modal-close")
    .addEventListener("click", () =>
      document.getElementById("modal").classList.remove("open"),
    );
  document
    .getElementById("auth-modal-close")
    .addEventListener("click", () =>
      document.getElementById("auth-modal").classList.remove("open"),
    );
  document
    .getElementById("profile-modal-close")
    .addEventListener("click", () =>
      document.getElementById("profile-modal").classList.remove("open"),
    );
  document
    .getElementById("post-modal-close")
    .addEventListener("click", () =>
      document.getElementById("post-modal").classList.remove("open"),
    );
  document
    .getElementById("filter-modal-close")
    .addEventListener("click", () =>
      document.getElementById("filter-modal").classList.remove("open"),
    );
  document
    .getElementById("staff-modal-close-btn")
    .addEventListener("click", () =>
      document.getElementById("staff-modal").classList.remove("open"),
    );
  document
    .getElementById("book-modal-close")
    .addEventListener("click", () =>
      document.getElementById("book-modal").classList.remove("open"),
    );
  document
    .getElementById("dab-book-close")
    .addEventListener("click", () =>
      document.getElementById("dab-book-modal").classList.remove("open"),
    );
  document
    .getElementById("faculty-modal-close")
    .addEventListener("click", () =>
      document.getElementById("faculty-detail-modal").classList.remove("open"),
    );
  document
    .getElementById("share-modal-close")
    .addEventListener("click", () =>
      document.getElementById("share-modal").classList.remove("open"),
    );
  document
    .getElementById("report-modal-close")
    .addEventListener("click", () =>
      document.getElementById("report-modal").classList.remove("open"),
    );

  document.getElementById("link-to-register").addEventListener("click", (e) => {
    e.preventDefault();
    clearAllInlineErrors();
    switchAuthPanel("register-form");
  });
  document.getElementById("link-to-login").addEventListener("click", (e) => {
    e.preventDefault();
    clearAllInlineErrors();
    switchAuthPanel("login-form");
  });
  document.getElementById("link-to-admin").addEventListener("click", (e) => {
    e.preventDefault();
    clearAllInlineErrors();
    switchAuthPanel("admin-login-form");
  });
  document.getElementById("link-admin-back").addEventListener("click", (e) => {
    e.preventDefault();
    clearAllInlineErrors();
    switchAuthPanel("login-form");
  });

  // Clear inline errors on input typing
  ["login-email", "login-password"].forEach((id) => {
    document.getElementById(id)?.addEventListener("input", () => {
      setInlineError("login-error-msg", "", ["login-email", "login-password"]);
    });
  });
  document
    .getElementById("admin-password-input")
    ?.addEventListener("input", () => {
      setInlineError("admin-login-error-msg", "", ["admin-password-input"]);
    });
  ["reg-firstname", "reg-lastname", "reg-email", "reg-password"].forEach(
    (id) => {
      document.getElementById(id)?.addEventListener("input", () => {
        setInlineError("register-error-msg", "", [
          "reg-firstname",
          "reg-lastname",
          "reg-email",
          "reg-password",
        ]);
      });
    },
  );
  [
    "prof-edit-firstname",
    "prof-edit-lastname",
    "prof-edit-email",
    "prof-edit-password",
  ].forEach((id) => {
    document.getElementById(id)?.addEventListener("input", () => {
      setInlineError("profile-error-msg", "", [
        "prof-edit-firstname",
        "prof-edit-email",
        "prof-edit-password",
      ]);
    });
  });

  const profImageFile = document.getElementById("prof-image-file");
  if (profImageFile) {
    profImageFile.addEventListener("change", (e) => {
      const dict = getDict();
      const file = e.target.files[0];
      if (file) {
        document.getElementById("prof-file-name").textContent =
          `${dict.selectedFilePrefix} ${file.name}`;
        const reader = new FileReader();
        reader.onload = (evt) => {
          document.getElementById("dash-avatar-img").src = evt.target.result;
        };
        reader.readAsDataURL(file);
      }
    });
  }

  document.querySelectorAll(".prof-tab-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      document
        .querySelectorAll(".prof-tab-btn")
        .forEach((b) => b.classList.remove("active"));
      document
        .querySelectorAll(".prof-tab-content")
        .forEach((c) => c.classList.remove("active"));
      e.currentTarget.classList.add("active");
      const tabId = e.currentTarget.getAttribute("data-tab");
      document.getElementById(`tab-${tabId}`).classList.add("active");
      if (tabId === "badges") renderBadgesRoadmap();
      if (tabId === "saved") renderSavedAndLikedLists();
    });
  });

  document.getElementById("dab-dots-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    document.getElementById("dab-dots-menu").classList.toggle("open");
  });
  document.addEventListener("click", () => {
    const menu = document.getElementById("dab-dots-menu");
    if (menu) menu.classList.remove("open");
    document
      .querySelectorAll(".staff-dots-menu.open")
      .forEach((m) => m.classList.remove("open"));
  });

  document.getElementById("dab-action-share").addEventListener("click", () => {
    document.getElementById("dab-dots-menu").classList.remove("open");
    document.getElementById("share-modal").classList.add("open");
  });
  document.getElementById("dab-action-report").addEventListener("click", () => {
    document.getElementById("dab-dots-menu").classList.remove("open");
    document.getElementById("report-modal").classList.add("open");
  });

  document
    .getElementById("btn-submit-comment")
    .addEventListener("click", handleAddComment);
  document
    .getElementById("btn-submit-book-comment")
    .addEventListener("click", handleAddBookComment);

  document
    .getElementById("login-form")
    .addEventListener("submit", handleLoginSubmit);
  document
    .getElementById("admin-login-form")
    .addEventListener("submit", handleAdminLoginSubmit);
  document
    .getElementById("register-form")
    .addEventListener("submit", handleRegisterSubmit);
  document
    .getElementById("profile-update-form")
    .addEventListener("submit", handleProfileUpdate);
  document.getElementById("btn-logout").addEventListener("click", handleLogout);
  document
    .getElementById("post-form")
    .addEventListener("submit", handleNewPost);
  document
    .getElementById("staff-form")
    .addEventListener("submit", handleStaffFormSubmit);
  document
    .getElementById("book-form")
    .addEventListener("submit", handleBookFormSubmit);
});

function switchAuthPanel(panelId) {
  clearAllInlineErrors();
  document
    .querySelectorAll(".auth-form-panel")
    .forEach((p) => p.classList.remove("active"));
  const target = document.getElementById(panelId);
  if (target) target.classList.add("active");
}

function initModalBackdropListeners() {
  document.querySelectorAll(".modal").forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("open");
    });
  });
}

function switchNavSection(secName, subTabName) {
  document
    .querySelectorAll(".page-section")
    .forEach((s) => s.classList.remove("active"));
  document
    .querySelectorAll(".nav-link")
    .forEach((l) => l.classList.remove("active"));

  if (secName === "home") {
    document.getElementById("sec-home").classList.add("active");
    document.getElementById("nav-home").classList.add("active");
  } else if (secName === "announcements") {
    document.getElementById("sec-home").classList.add("active");
    document.getElementById("nav-news").classList.add("active");
    const secAnnounceEl = document.getElementById("announcements-grid");
    if (secAnnounceEl) secAnnounceEl.scrollIntoView({ behavior: "smooth" });
  } else if (secName === "library") {
    document.getElementById("sec-library").classList.add("active");
    document.getElementById("nav-library-link").classList.add("active");
    renderBooks();
  } else if (secName === "about") {
    document.getElementById("sec-about").classList.add("active");
    document.getElementById("nav-about").classList.add("active");
    if (subTabName) showAboutTab(subTabName);
  } else if (secName === "contact") {
    document.getElementById("sec-home").classList.add("active");
    document.getElementById("nav-contact").classList.add("active");
    const contactFormEl = document.getElementById("contact-form");
    if (contactFormEl) contactFormEl.scrollIntoView({ behavior: "smooth" });
  }
}

function showAboutTab(tabName) {
  document
    .querySelectorAll(".about-tab-btn")
    .forEach((b) => b.classList.remove("active"));
  document
    .querySelectorAll(".about-panel")
    .forEach((p) => p.classList.remove("active"));

  if (tabName === "nurtech") {
    document.getElementById("tab-btn-nurtech").classList.add("active");
    document.getElementById("about-panel-nurtech").classList.add("active");
  } else if (tabName === "faculty") {
    document.getElementById("tab-btn-faculty").classList.add("active");
    document.getElementById("about-panel-faculty").classList.add("active");
    renderFaculty(document.getElementById("faculty-search").value);
  } else if (tabName === "privacy") {
    document.getElementById("tab-btn-privacy").classList.add("active");
    document.getElementById("about-panel-privacy").classList.add("active");
  } else if (tabName === "hub") {
    document.getElementById("tab-btn-hub").classList.add("active");
    document.getElementById("about-panel-hub").classList.add("active");
  }
}

function initMottoCarousel() {
  setInterval(() => {
    const m1 = document.getElementById("motto-1");
    const m2 = document.getElementById("motto-2");
    if (m1 && m2) {
      m1.classList.toggle("active");
      m2.classList.toggle("active");
    }
  }, 6000);
}

function checkCookieConsent() {
  if (localStorage.getItem("nurtech-cookie-accepted")) {
    document.getElementById("cookie-overlay").style.display = "none";
  } else {
    document.getElementById("cookie-overlay").style.display = "flex";
  }
}

function acceptCookies(type) {
  localStorage.setItem("nurtech-cookie-accepted", type);
  document.getElementById("cookie-overlay").style.display = "none";
}

function checkAuthSession() {
  renderAuthWidget();
}

function renderAuthWidget() {
  const container = document.getElementById("auth-widget-container");
  const addPostContainer = document.getElementById("add-post-action");
  const addStaffContainer = document.getElementById("admin-add-staff-action");
  const addBookContainer = document.getElementById("admin-add-book-action");
  const dict = getDict();

  if (!container) return;

  if (isAdminUser() || isLibrarianUser()) {
    document.body.classList.add("is-admin");
  } else {
    document.body.classList.remove("is-admin");
  }

  if (currentUser) {
    const avatar =
      currentUser.avatar ||
      "https://api.dicebear.com/7.x/initials/svg?seed=User";
    const roleLabel = isAdminUser()
      ? dict.optRoleAdmin
      : isLibrarianUser()
        ? dict.optRoleLibrarian
        : currentUser.role === "faculty"
          ? dict.optRoleFaculty
          : dict.optRoleStudent;

    const displayName = isAdminUser()
      ? "Admin"
      : isLibrarianUser()
        ? dict.optRoleLibrarian
        : `${currentUser.firstName} ${currentUser.lastName}`;
    const checkmarkHtml = getSilverCheckmarkHtml(
      isAdminUser() || isLibrarianUser(),
    );

    container.innerHTML = `
      <div id="profile-trigger" class="profile-pill" role="button" tabindex="0" title="${dict.profileManageTitle}">
        <img src="${avatar}" alt="Avatar" style="width:2rem; height:2rem; border-radius:50%; object-fit:cover;">
        <div style="text-align:left; font-size:0.8rem; line-height:1.2;">
          <strong style="display:flex; align-items:center; gap:0.1rem; max-width:130px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">
            ${displayName} ${checkmarkHtml}
          </strong>
          <span style="color:${isAdminUser() || isLibrarianUser() ? "var(--accent)" : "var(--text-muted)"}; font-size:0.7rem; font-weight:700;">${roleLabel}</span>
        </div>
      </div>
    `;

    const triggerEl = document.getElementById("profile-trigger");
    if (triggerEl) {
      triggerEl.addEventListener("click", openDashboardModal);
      triggerEl.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openDashboardModal();
        }
      });
    }

    if (addPostContainer) {
      addPostContainer.innerHTML = `
        <button class="btn btn-primary" id="btn-open-post-modal" style="font-size: 0.9rem;">
          <i class="fa-solid fa-plus"></i> ${dict.btnAddPost}
        </button>
      `;
      document
        .getElementById("btn-open-post-modal")
        .addEventListener("click", () => openPostModalForCreate());
    }

    if (addStaffContainer) {
      if (isAdminUser()) {
        addStaffContainer.innerHTML = `
          <button class="btn btn-primary" id="btn-open-add-staff" style="font-size: 0.9rem;">
            <i class="fa-solid fa-user-plus"></i> ${dict.btnAddStaff}
          </button>
        `;
        document
          .getElementById("btn-open-add-staff")
          .addEventListener("click", openStaffModalForCreate);
      } else {
        addStaffContainer.innerHTML = "";
      }
    }

    if (addBookContainer) {
      if (isLibrarianUser() || isAdminUser()) {
        addBookContainer.innerHTML = `
          <button class="btn btn-primary" id="btn-open-add-book" style="font-size: 0.9rem;">
            <i class="fa-solid fa-book-medical"></i> ${dict.btnAddBook}
          </button>
        `;
        document
          .getElementById("btn-open-add-book")
          .addEventListener("click", openBookModalForCreate);
      } else {
        addBookContainer.innerHTML = "";
      }
    }
  } else {
    container.innerHTML = `
      <button id="btn-open-auth" class="btn btn-primary" style="padding: 0.4rem 0.9rem; font-size: 0.85rem;">${dict.btnAuth}</button>
    `;
    document.getElementById("btn-open-auth").addEventListener("click", () => {
      switchAuthPanel("login-form");
      document.getElementById("auth-modal").classList.add("open");
    });
    if (addPostContainer) addPostContainer.innerHTML = "";
    if (addStaffContainer) addStaffContainer.innerHTML = "";
    if (addBookContainer) addBookContainer.innerHTML = "";
  }
}

function handleCategoryChange() {
  const type = document.getElementById("post-type").value;
  const deadlineGroup = document.getElementById("deadline-form-group");
  const deadlineInput = document.getElementById("post-deadline");

  if (type === "exam" || type === "competition" || type === "event") {
    deadlineGroup.style.display = "block";
    deadlineInput.required = true;
  } else {
    deadlineGroup.style.display = "none";
    deadlineInput.required = false;
    deadlineInput.value = "";
  }
}

function renderTagChips() {
  const container = document.getElementById("tag-chips-container");
  container.innerHTML = "";
  currentTagList.forEach((tag, idx) => {
    const chip = document.createElement("span");
    chip.className = "tag-chip-item";
    chip.innerHTML = `#${tag} <span class="remove-tag-btn" onclick="removeTagChip(${idx})">&times;</span>`;
    container.appendChild(chip);
  });
}

function removeTagChip(idx) {
  currentTagList.splice(idx, 1);
  renderTagChips();
}

function handleLoginSubmit(e) {
  e.preventDefault();
  const dict = getDict();
  clearAllInlineErrors();

  const email = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value.trim();

  if (email === "librarian1" || email === "librarian1@nurtech.uz") {
    if (password === "librarian1") {
      currentUser = {
        firstName: "Kutubxonachi",
        lastName: "1",
        email: "librarian1@nurtech.uz",
        password: "librarian1",
        role: "librarian",
        isLibrarian: true,
        avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Librarian",
      };
      localStorage.setItem("nurtech-current-user", JSON.stringify(currentUser));
      document.getElementById("auth-modal").classList.remove("open");
      renderAuthWidget();
      renderAnnouncements();
      renderBooks();
      renderFaculty(document.getElementById("faculty-search").value);
      return;
    }
  }

  const found = registeredUsers.find(
    (u) => u.email === email && u.password === password,
  );
  if (!found) {
    setInlineError("login-error-msg", dict.errWrongLogin, [
      "login-email",
      "login-password",
    ]);
    return;
  }

  currentUser = found;
  localStorage.setItem("nurtech-current-user", JSON.stringify(currentUser));

  document.getElementById("auth-modal").classList.remove("open");
  renderAuthWidget();
  renderAnnouncements();
  renderBooks();
  renderFaculty(document.getElementById("faculty-search").value);
}

function handleAdminLoginSubmit(e) {
  e.preventDefault();
  const dict = getDict();
  clearAllInlineErrors();

  const enteredPassword = document.getElementById("admin-password-input").value;

  // SECURITY NOTE: Hardcoded client-side credentials are NOT safe for an official portal.
  // Anyone can read this source and log in as admin. Real auth must be server-side.
  if (enteredPassword !== "admin9admin") {
    setInlineError("admin-login-error-msg", dict.errWrongAdminPass, [
      "admin-password-input",
    ]);
    return;
  }

  const adminAccount = {
    firstName: "Admin",
    lastName: "",
    email: "admin@nurtech.uz",
    password: "admin9admin",
    role: "admin",
    isAdmin: true,
    isLibrarian: true,
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Admin",
  };

  currentUser = adminAccount;
  localStorage.setItem("nurtech-current-user", JSON.stringify(currentUser));

  document.getElementById("admin-password-input").value = "";
  document.getElementById("auth-modal").classList.remove("open");
  renderAuthWidget();
  renderAnnouncements();
  renderBooks();
  renderFaculty(document.getElementById("faculty-search").value);
}

function openDashboardModal() {
  if (!currentUser) return;
  const dict = getDict();
  clearAllInlineErrors();

  document.getElementById("dash-avatar-img").src =
    currentUser.avatar || "https://api.dicebear.com/7.x/initials/svg?seed=User";
  document.getElementById("dash-user-name").textContent = isAdminUser()
    ? "Admin"
    : isLibrarianUser()
      ? dict.optRoleLibrarian
      : `${currentUser.firstName} ${currentUser.lastName}`;
  document.getElementById("dash-badge-icon-slot").innerHTML =
    getSilverCheckmarkHtml(isAdminUser() || isLibrarianUser());
  document.getElementById("dash-user-email").textContent = currentUser.email;
  document.getElementById("dash-user-role-badge").textContent = isAdminUser()
    ? dict.optRoleAdmin
    : isLibrarianUser()
      ? dict.optRoleLibrarian
      : currentUser.role === "faculty"
        ? dict.optRoleFaculty
        : dict.optRoleStudent;

  document.getElementById("prof-edit-firstname").value =
    currentUser.firstName || "";
  document.getElementById("prof-edit-lastname").value =
    currentUser.lastName || "";
  document.getElementById("prof-edit-email").value = currentUser.email || "";
  document.getElementById("prof-edit-password").value = "";
  document.getElementById("prof-file-name").textContent = "";

  const myPosts = sampleAnnouncements.filter(
    (a) => a.authorEmail === currentUser.email,
  );
  let sumViews = 0,
    sumLikes = 0,
    sumEnrolls = 0;
  myPosts.forEach((p) => {
    sumViews += p.views || 0;
    sumLikes += Array.isArray(p.likes) ? p.likes.length : p.likes || 0;
    sumEnrolls += p.enrolled ? p.enrolled.length : 0;
  });

  document.getElementById("stat-sum-views").textContent = sumViews;
  document.getElementById("stat-sum-likes").textContent = sumLikes;
  document.getElementById("stat-sum-enrolls").textContent = sumEnrolls;
  document.getElementById("notif-badge").textContent = sumEnrolls;

  renderMyPostsList();
  renderNotificationsList();
  renderSavedAndLikedLists();

  document.getElementById("profile-modal").classList.add("open");
}

const dashPostBtn = document.getElementById("btn-open-post-from-dash");
if (dashPostBtn) {
  dashPostBtn.addEventListener("click", () => {
    document.getElementById("profile-modal").classList.remove("open");
    openPostModalForCreate();
  });
}

function handleProfileUpdate(e) {
  e.preventDefault();
  const dict = getDict();
  clearAllInlineErrors();

  const firstName = document.getElementById("prof-edit-firstname").value.trim();
  const lastName = document.getElementById("prof-edit-lastname").value.trim();
  const email = document.getElementById("prof-edit-email").value.trim();
  const newPass = document.getElementById("prof-edit-password").value.trim();

  if (!firstName || !email) {
    setInlineError("profile-error-msg", dict.errFillAllFields, [
      "prof-edit-firstname",
      "prof-edit-email",
    ]);
    return;
  }

  if (newPass && newPass.length < 8) {
    setInlineError("profile-error-msg", dict.errShortPass, [
      "prof-edit-password",
    ]);
    return;
  }

  currentUser.firstName = firstName;
  currentUser.lastName = lastName;
  currentUser.email = email;
  if (newPass) {
    currentUser.password = newPass;
  }

  const fileInput = document.getElementById("prof-image-file");
  if (fileInput.files && fileInput.files[0]) {
    const reader = new FileReader();
    reader.onload = function (evt) {
      currentUser.avatar = evt.target.result;
      finalizeProfileUpdate();
    };
    reader.readAsDataURL(fileInput.files[0]);
  } else {
    finalizeProfileUpdate();
  }
}

function handleLogout() {
  localStorage.removeItem("nurtech-current-user");
  currentUser = null;
  document.getElementById("profile-modal").classList.remove("open");
  renderAuthWidget();
  renderAnnouncements();
  renderBooks();
  renderFaculty(document.getElementById("faculty-search").value);
}

function openPostModalForCreate() {
  const dict = getDict();
  clearAllInlineErrors();
  document.getElementById("edit-post-id").value = "";
  document.getElementById("post-form").reset();
  currentTagList = [];
  renderTagChips();
  handleCategoryChange();
  document.getElementById("word-count-badge").textContent =
    `${dict.wordCountPrefix} 0 / 10`;
  document.getElementById("word-count-badge").style.color = "#ef4444";
  document.getElementById("post-modal").classList.add("open");
}

async function handleNewPost(e) {
  e.preventDefault();
  if (!currentUser) return;
  const dict = getDict();
  clearAllInlineErrors();

  const rawTitle = document.getElementById("post-title").value.trim();
  const rawText = document.getElementById("post-text").value.trim();
  const type = document.getElementById("post-type").value;
  const deadline = document.getElementById("post-deadline").value;
  const allowEnroll = document.getElementById("post-allow-enroll").checked;

  if (!rawTitle) {
    setInlineError("post-form-error", dict.errPostTitle, ["post-title"]);
    return;
  }

  const wordsCount = rawText ? rawText.split(/\s+/).length : 0;
  if (wordsCount < 10) {
    setInlineError("post-form-error", `${dict.errPostWords} ${wordsCount}`, [
      "post-text",
    ]);
    return;
  }

  let mediaArray = [];
  const fileInput = document.getElementById("post-media-files");
  if (fileInput && fileInput.files && fileInput.files[0]) {
    try {
      const file = fileInput.files[0];
      const dataUrl = await readFileAsDataURL(file);
      let fileType = "document";
      if (file.type.startsWith("image/")) fileType = "image";
      else if (file.type.startsWith("video/")) fileType = "video";
      mediaArray.push({ type: fileType, url: dataUrl, name: file.name });
    } catch (err) {
      console.warn("File reading skipped:", err);
    }
  }

  const authorName = isAdminUser()
    ? "Admin"
    : isLibrarianUser()
      ? dict.optRoleLibrarian
      : `${currentUser.firstName} ${currentUser.lastName}`;

  // 1. Prepare data matching your Supabase table columns
  const newPostPayload = {
    type: type,
    title: rawTitle,
    text: rawText,
    author: authorName,
    author_email: currentUser.email,
    is_admin: isAdminUser() || isLibrarianUser(),
    media: mediaArray,
    tags: currentTagList,
    deadline: deadline || null,
    allow_enroll: allowEnroll,
    views: 0,
    likes: [],
    enrolled: [],
    comments: [],
  };

  // 2. Send to Supabase
  if (supabaseClient) {
    const { error } = await supabaseClient
      .from("announcements")
      .insert([newPostPayload]);

    if (error) {
      console.error("Supabase insert error:", error);
      alert("Error saving to Supabase: " + error.message);
      return;
    }
  }

  // 3. Refresh announcements list from Supabase database
  await fetchAnnouncementsFromSupabase();

  document.getElementById("post-modal").classList.remove("open");
  document.getElementById("post-form").reset();
  currentTagList = [];
  renderTagChips();
  showToast(dict.toastPostPublished, "success");
}
async function fetchBooksFromSupabase() {
  const localBooksSaved = JSON.parse(localStorage.getItem("nurtech-books"));
  if (!supabaseClient) {
    if (localBooksSaved) sampleBooks = localBooksSaved;
    renderBooks();
    return;
  }

  try {
    const { data, error } = await supabaseClient
      .from("books")
      .select("*")
      .order("created_at", { ascending: false });

    if (error || !data) {
      throw new Error("Supabase book fetch error");
    }

    sampleBooks = data.map((item) => ({
      id: item.id,
      title: item.title,
      author: item.author,
      category: item.category || "other",
      description: item.description,
      fileUrl: item.file_url,
      fileName: item.file_url ? item.file_url.split("/").pop() : "book.pdf",
      imageUrl:
        item.image_url ||
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&auto=format&fit=crop&q=60",
      authorName: item.author_name || "Librarian",
      authorEmail: item.author_email || "",
      views: item.views || 0,
      downloads: item.downloads || 0,
      likes: item.likes || [],
      savedBy: item.savedBy || [],
      comments: item.comments || [],
      commentSort: item.commentSort || "popular",
    }));
  } catch (err) {
    console.warn("Falling back to local books storage:", err);
    if (localBooksSaved) sampleBooks = localBooksSaved;
  }
  renderBooks();
}

async function fetchFacultyFromSupabase() {
  if (!supabaseClient) {
    renderFaculty(document.getElementById("faculty-search")?.value || "");
    return;
  }

  const { data, error } = await supabaseClient
    .from("faculty")
    .select("*")
    .order("id", { ascending: true });

  if (!error && Array.isArray(data)) {
    // Seed initial default faculty once if the table is completely empty
    if (data.length === 0 && defaultFacultyMembers.length > 0) {
      const seedRows = defaultFacultyMembers.map(
        ({ name, role, description }) => ({
          name,
          role,
          description: description || "",
        }),
      );
      const { data: inserted } = await supabaseClient
        .from("faculty")
        .insert(seedRows)
        .select();
      if (inserted && inserted.length > 0) {
        facultyMembers = inserted;
      }
    } else {
      facultyMembers = data;
    }
    saveFacultyToStorage();
  }

  renderFaculty(document.getElementById("faculty-search")?.value || "");
}

async function fetchStatsFromSupabase() {
  if (!supabaseClient) {
    applyStatsTargetsToDOM();
    renderStatsImmediate();
    return;
  }

  const { data, error } = await supabaseClient
    .from("site_stats")
    .select("*")
    .eq("id", 1)
    .single();

  if (!error && data) {
    siteStats = {
      students: data.students ?? siteStats.students,
      workshops: data.workshops ?? siteStats.workshops,
      teachers: data.teachers ?? siteStats.teachers,
      employment: data.employment ?? siteStats.employment,
    };
    saveStatsToStorage();
  }

  applyStatsTargetsToDOM();
  renderStatsImmediate();
}

async function fetchUsersFromSupabase() {
  if (!supabaseClient) return;

  const { data, error } = await supabaseClient.from("portal_users").select("*");

  if (!error && Array.isArray(data) && data.length > 0) {
    const dbUsers = data.map((u) => ({
      id: u.id,
      firstName: u.first_name,
      lastName: u.last_name || "",
      email: u.email,
      password: u.password,
      role: u.role || "student",
      isAdmin: Boolean(u.is_admin),
      isLibrarian: Boolean(u.is_librarian),
      avatar:
        u.avatar ||
        `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(u.first_name || "User")}`,
    }));

    // Merge built-in default accounts if missing in DB
    const merged = [...dbUsers];
    registeredUsers.forEach((def) => {
      if (!merged.some((m) => m.email === def.email)) {
        merged.push(def);
      }
    });
    registeredUsers = merged;
    localStorage.setItem("nurtech-users", JSON.stringify(registeredUsers));
  }
}

function readFileAsDataURL(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target.result);
    reader.readAsDataURL(file);
  });
}

function deleteAnnouncement(postId) {
  const dict = getDict();
  showConfirmModal(dict.confirmDeletePost, async () => {
    if (supabaseClient) {
      const { error } = await supabaseClient
        .from("announcements")
        .delete()
        .eq("id", postId);
      if (error) {
        console.error("Announcement delete error:", error);
        showToast(error.message, "error");
        return;
      }
    }

    sampleAnnouncements = sampleAnnouncements.filter(
      (a) => String(a.id) !== String(postId),
    );
    localStorage.setItem(
      "nurtech-announcements",
      JSON.stringify(sampleAnnouncements),
    );
    renderAnnouncements();
    if (document.getElementById("profile-modal").classList.contains("open")) {
      renderMyPostsList();
    }
    showToast(dict.toastPostDeleted, "success");
  });
}

// ================= E-LIBRARY FUNCTIONS =================
function openBookModalForCreate() {
  if (!isLibrarianUser() && !isAdminUser()) return;
  clearAllInlineErrors();
  document.getElementById("edit-book-id").value = "";
  document.getElementById("book-form").reset();
  document.getElementById("book-modal").classList.add("open");
}

let isBookSubmitting = false;

async function handleBookFormSubmit(e) {
  e.preventDefault();
  if (isBookSubmitting) return;
  if (!isLibrarianUser() && !isAdminUser()) return;
  const dict = getDict();
  clearAllInlineErrors();

  const title = document.getElementById("book-title-input").value.trim();
  const author = document.getElementById("book-author-input").value.trim();
  const category = document.getElementById("book-category-input").value;
  const description = document.getElementById("book-desc-input").value.trim();

  const fileInput = document.getElementById("book-file-input");
  const imageInput = document.getElementById("book-image-input");
  const submitBtn = document.getElementById("btn-save-book");

  if (!title || !author || !description) {
    setInlineError("book-form-error", dict.errBookFields, [
      "book-title-input",
      "book-author-input",
      "book-desc-input",
    ]);
    return;
  }

  if (!fileInput.files || !fileInput.files[0]) {
    setInlineError("book-form-error", dict.errBookFile, ["book-file-input"]);
    return;
  }

  const bookFile = fileInput.files[0];
  let fileUrl = "#";
  const fileName = bookFile.name;
  let imageUrl =
    "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&auto=format&fit=crop&q=60";

  isBookSubmitting = true;
  submitBtn.disabled = true;
  const originalBtnText = submitBtn.textContent;
  submitBtn.textContent = "Yuklanmoqda...";

  let uploadedBookPath = null;
  let uploadedCoverPath = null;

  try {
    if (supabaseClient) {
      const safeBookName = `${Date.now()}_${bookFile.name.replace(/[^a-zA-Z0-9._-]/g, "_")}`;
      uploadedBookPath = `books/${safeBookName}`;
      const { error: bookUploadErr } = await supabaseClient.storage
        .from("library-files")
        .upload(uploadedBookPath, bookFile, { upsert: false });

      if (bookUploadErr) throw bookUploadErr;

      const { data: bookUrlData } = supabaseClient.storage
        .from("library-files")
        .getPublicUrl(uploadedBookPath);
      if (bookUrlData?.publicUrl) fileUrl = bookUrlData.publicUrl;

      if (imageInput.files && imageInput.files[0]) {
        const coverFile = imageInput.files[0];
        const safeCoverName = `${Date.now()}_${coverFile.name.replace(/[^a-zA-Z0-9._-]/g, "_")}`;
        uploadedCoverPath = `covers/${safeCoverName}`;
        const { error: coverUploadErr } = await supabaseClient.storage
          .from("library-files")
          .upload(uploadedCoverPath, coverFile, { upsert: false });

        if (!coverUploadErr) {
          const { data: coverUrlData } = supabaseClient.storage
            .from("library-files")
            .getPublicUrl(uploadedCoverPath);
          if (coverUrlData?.publicUrl) imageUrl = coverUrlData.publicUrl;
        }
      }

      const { error: dbErr } = await supabaseClient.from("books").insert([
        {
          title,
          author,
          category,
          description,
          file_url: fileUrl,
          image_url: imageUrl,
          views: 0,
          downloads: 0,
          likes: [],
          comments: [],
        },
      ]);

      if (dbErr) {
        const toRemove = [uploadedBookPath, uploadedCoverPath].filter(Boolean);
        if (toRemove.length > 0) {
          await supabaseClient.storage.from("library-files").remove(toRemove);
        }
        throw dbErr;
      }
      await fetchBooksFromSupabase();
    } else {
      sampleBooks.unshift({
        id: "book_" + Date.now(),
        title,
        author,
        category,
        description,
        fileUrl,
        fileName,
        imageUrl,
        authorName: currentUser
          ? `${currentUser.firstName} ${currentUser.lastName}`.trim()
          : "Admin",
        authorEmail: currentUser?.email || "",
        timestamp: Date.now(),
        date: new Date().toISOString().split("T")[0],
        views: 0,
        downloads: 0,
        likes: [],
        savedBy: [],
        comments: [],
        commentSort: "popular",
      });
      saveBooksToStorage();
      renderBooks();
    }

    document.getElementById("book-modal").classList.remove("open");
    document.getElementById("book-form").reset();
    showToast(dict.toastBookAdded, "success");
  } catch (err) {
    console.error("Book upload error:", err);
    const errMsg = err?.message || "Yuklashda xatolik yuz berdi.";
    setInlineError("book-form-error", errMsg);
    showToast(errMsg, "error");
  } finally {
    isBookSubmitting = false;
    submitBtn.disabled = false;
    submitBtn.textContent = originalBtnText;
  }
}

async function handleStatEditSubmit(e) {
  e.preventDefault();
  if (!isAdminUser()) return;
  const dict = getDict();
  const statKey = document.getElementById("stat-edit-key").value;
  const rawVal = document.getElementById("stat-edit-input").value.trim();
  const parsed = parseInt(rawVal, 10);

  if (rawVal === "" || isNaN(parsed) || parsed < 0) {
    setInlineError("stat-edit-error", dict.statEditError, ["stat-edit-input"]);
    return;
  }

  setInlineError("stat-edit-error", "", ["stat-edit-input"]);
  siteStats[statKey] = parsed;
  saveStatsToStorage();

  if (supabaseClient) {
    const { error } = await supabaseClient
      .from("site_stats")
      .upsert({ id: 1, ...siteStats });
    if (error) {
      console.error("Stats update error:", error);
      setInlineError("stat-edit-error", error.message, ["stat-edit-input"]);
      return;
    }
  }

  applyStatsTargetsToDOM();
  renderStatsImmediate();
  document.getElementById("stat-edit-modal").classList.remove("open");
  showToast(dict.statEditSuccess, "success");
}

async function handleStaffFormSubmit(e) {
  e.preventDefault();
  if (!isAdminUser()) return;
  const dict = getDict();
  clearAllInlineErrors();

  const name = document.getElementById("staff-name-input").value.trim();
  const role = document.getElementById("staff-role-input").value.trim();
  const description = document.getElementById("staff-desc-input").value.trim();

  if (!name || !role) {
    setInlineError("staff-form-error", dict.errStaffFields, [
      "staff-name-input",
      "staff-role-input",
    ]);
    return;
  }

  if (supabaseClient) {
    const { data, error } = await supabaseClient
      .from("faculty")
      .insert([{ name, role, description }])
      .select()
      .single();

    if (error) {
      console.error("Faculty insert error:", error);
      setInlineError("staff-form-error", error.message);
      return;
    }

    if (data) {
      facultyMembers.unshift(data);
    } else {
      await fetchFacultyFromSupabase();
    }
  } else {
    const maxId = facultyMembers.reduce(
      (max, m) => Math.max(max, m.id || 0),
      0,
    );
    facultyMembers.unshift({ id: maxId + 1, name, role, description });
  }

  saveFacultyToStorage();
  facultyCurrentPage = 0;
  renderFaculty(document.getElementById("faculty-search").value);
  document.getElementById("staff-modal").classList.remove("open");
  document.getElementById("staff-form").reset();
  showToast(dict.toastStaffAdded, "success");
}

function deleteStaffMember(staffId) {
  if (!isAdminUser()) return;
  const dict = getDict();
  showConfirmModal(dict.confirmDeleteStaff, async () => {
    if (supabaseClient) {
      const { error } = await supabaseClient
        .from("faculty")
        .delete()
        .eq("id", Number(staffId));
      if (error) {
        console.error("Faculty delete error:", error);
        showToast(error.message, "error");
        return;
      }
    }

    facultyMembers = facultyMembers.filter(
      (m) => Number(m.id) !== Number(staffId),
    );
    saveFacultyToStorage();
    renderFaculty(document.getElementById("faculty-search").value);
    showToast(dict.toastStaffDeleted, "success");
  });
}

async function handleRegisterSubmit(e) {
  e.preventDefault();
  const dict = getDict();
  clearAllInlineErrors();

  const firstName = document.getElementById("reg-firstname").value.trim();
  const lastName = document.getElementById("reg-lastname").value.trim();
  const email = document.getElementById("reg-email").value.trim();
  const password = document.getElementById("reg-password").value.trim();
  const role = document.getElementById("reg-role").value;

  if (!firstName || !lastName || !email || !password) {
    setInlineError("register-error-msg", dict.errFillAllFields, [
      "reg-firstname",
      "reg-lastname",
      "reg-email",
      "reg-password",
    ]);
    return;
  }

  if (password.length < 8) {
    setInlineError("register-error-msg", dict.errShortPass, ["reg-password"]);
    return;
  }

  if (registeredUsers.some((u) => u.email === email)) {
    setInlineError("register-error-msg", dict.errEmailExists, ["reg-email"]);
    return;
  }

  const avatar = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(firstName + " " + lastName)}`;
  const newUser = {
    firstName,
    lastName,
    email,
    password,
    role,
    isAdmin: false,
    isLibrarian: role === "librarian",
    avatar,
  };

  if (supabaseClient) {
    const { data, error } = await supabaseClient
      .from("portal_users")
      .insert([
        {
          first_name: firstName,
          last_name: lastName,
          email,
          password,
          role,
          is_admin: false,
          is_librarian: role === "librarian",
          avatar,
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("User register error:", error);
      setInlineError("register-error-msg", error.message, ["reg-email"]);
      return;
    }
    if (data && data.id) newUser.id = data.id;
  }

  registeredUsers.push(newUser);
  localStorage.setItem("nurtech-users", JSON.stringify(registeredUsers));

  currentUser = newUser;
  localStorage.setItem("nurtech-current-user", JSON.stringify(currentUser));

  document.getElementById("auth-modal").classList.remove("open");
  renderAuthWidget();
  renderAnnouncements();
  renderBooks();
  renderFaculty(document.getElementById("faculty-search").value);
}

async function finalizeProfileUpdate() {
  const dict = getDict();

  if (supabaseClient) {
    const { error } = await supabaseClient
      .from("portal_users")
      .update({
        first_name: currentUser.firstName,
        last_name: currentUser.lastName || "",
        email: currentUser.email,
        password: currentUser.password,
        avatar: currentUser.avatar,
      })
      .eq("email", currentUser.email);

    if (error) {
      console.error("Profile update error:", error);
      showToast(error.message, "error");
      return;
    }
  }

  const idx = registeredUsers.findIndex((u) => u.email === currentUser.email);
  if (idx !== -1) registeredUsers[idx] = currentUser;
  localStorage.setItem("nurtech-users", JSON.stringify(registeredUsers));
  localStorage.setItem("nurtech-current-user", JSON.stringify(currentUser));

  document.getElementById("profile-modal").classList.remove("open");
  renderAuthWidget();
  showToast(dict.toastProfileUpdated, "success");
}

async function syncBookToSupabase(book) {
  saveBooksToStorage();
  if (!supabaseClient || !book || !book.id) return;

  const { error } = await supabaseClient
    .from("books")
    .update({
      views: book.views || 0,
      downloads: book.downloads || 0,
      likes: Array.isArray(book.likes) ? book.likes : [],
      comments: Array.isArray(book.comments) ? book.comments : [],
    })
    .eq("id", book.id);

  if (error) {
    console.error("Supabase book sync error:", error);
  }
}

async function syncAnnouncementToSupabase(ann) {
  localStorage.setItem(
    "nurtech-announcements",
    JSON.stringify(sampleAnnouncements),
  );
  if (!supabaseClient || !ann || !ann.id) return;

  const { error } = await supabaseClient
    .from("announcements")
    .update({
      views: ann.views || 0,
      likes: Array.isArray(ann.likes) ? ann.likes : [],
      comments: Array.isArray(ann.comments) ? ann.comments : [],
    })
    .eq("id", ann.id);

  if (error) {
    console.error("Supabase announcement sync error:", error);
  }
}

function deleteBook(bookId) {
  if (!isLibrarianUser() && !isAdminUser()) return;
  const dict = getDict();
  showConfirmModal(dict.confirmDeleteBook, async () => {
    if (supabaseClient) {
      const { error } = await supabaseClient
        .from("books")
        .delete()
        .eq("id", bookId);
      if (error) {
        console.error("Book delete error:", error);
        showToast(error.message, "error");
        return;
      }
    }

    sampleBooks = sampleBooks.filter((b) => String(b.id) !== String(bookId));
    saveBooksToStorage();
    renderBooks();
    showToast(dict.toastBookDeleted, "success");
  });
}

function renderBooks() {
  const grid = document.getElementById("books-grid");
  if (!grid) return;
  grid.innerHTML = "";
  const dict = getDict();

  const searchInput = document.getElementById("library-search");
  const query = searchInput ? searchInput.value.toLowerCase().trim() : "";
  const catFilter = document.getElementById("library-filter-category")
    ? document.getElementById("library-filter-category").value
    : "all";

  let filtered = [...sampleBooks];
  if (catFilter !== "all") {
    filtered = filtered.filter((b) => b.category === catFilter);
  }
  if (query) {
    filtered = filtered.filter(
      (b) =>
        b.title.toLowerCase().includes(query) ||
        b.author.toLowerCase().includes(query) ||
        b.description.toLowerCase().includes(query),
    );
  }

  if (filtered.length === 0) {
    grid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; color:var(--text-muted); padding: 2rem;">${dict.noBooksText}</p>`;
    return;
  }

  filtered.forEach((book) => {
    const card = document.createElement("div");
    card.className = "book-card-item";
    card.onclick = () => openBookModal(book.id);

    const deleteBtnHtml =
      isAdminUser() || isLibrarianUser()
        ? `<button class="admin-delete-book-btn" title="${dict.btnDeletePost}" onclick="event.stopPropagation(); deleteBook('${book.id}')">
          <i class="fa-solid fa-trash"></i>
        </button>`
        : "";

    card.innerHTML = `
      ${deleteBtnHtml}
      <div class="book-cover-wrap">
        <img src="${escapeHtml(book.imageUrl)}" class="book-cover-img" alt="Book Cover" loading="lazy">
        <div class="book-title-overlay">${escapeHtml(book.title)}</div>
      </div>
      <div class="book-card-content">
        <div>
          <span class="card-tag" style="margin-bottom:0.4rem; display:inline-block;">${escapeHtml(book.category.toUpperCase())}</span>
          <h3 style="font-size:1.15rem; margin-bottom:0.25rem;">${escapeHtml(book.title)}</h3>
          <p class="book-author-name"><i class="fa-solid fa-feather"></i> ${escapeHtml(book.author)}</p>
          <p class="book-desc-text">${escapeHtml(book.description.substring(0, 90))}...</p>
        </div>
        <div class="ldab-footer-row">
          <span><i class="fa-solid fa-download"></i> ${book.downloads || 0} ${dict.bookDownloadedTimes}</span>
          <button class="btn btn-primary" style="padding: 0.3rem 0.8rem; font-size: 0.8rem;" onclick="event.stopPropagation(); downloadBook('${book.id}')">
            <i class="fa-solid fa-download"></i> ${dict.bookDownloadBtn}
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function downloadBook(bookId) {
  const book = sampleBooks.find((b) => String(b.id) === String(bookId));
  if (!book) return;
  book.downloads = (book.downloads || 0) + 1;
  syncBookToSupabase(book);
  renderBooks();

  const a = document.createElement("a");
  a.href = book.fileUrl;
  a.download = book.fileName || "book.pdf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function openBookModal(bookId) {
  const book = sampleBooks.find((b) => String(b.id) === String(bookId));
  if (!book) return;
  const dict = getDict();
  activeModalBookId = bookId;
  book.views = (book.views || 0) + 1;
  syncBookToSupabase(book);

  const checkmark = getSilverCheckmarkHtml(
    isAdminUser(book.authorEmail, book.isAdminPost),
  );
  document.getElementById("dab-book-author-avatar").src =
    "https://api.dicebear.com/7.x/initials/svg?seed=" +
    encodeURIComponent(book.authorName || "Librarian");
  document.getElementById("dab-book-author-name").innerHTML =
    `${book.authorName || dict.optRoleLibrarian} ${checkmark}`;
  document.getElementById("dab-book-cat-badge").textContent =
    book.category.toUpperCase();
  document.getElementById("dab-book-time-ago").textContent =
    getSingleTypeRelativeTime(book.timestamp || Date.now());

  document.getElementById("dab-book-title").textContent = book.title;
  document.getElementById("dab-book-author-line").innerHTML =
    `<i class="fa-solid fa-pen-nib"></i> ${dict.bookAuthorPrefix} ${book.author}`;
  document.getElementById("dab-book-body").textContent = book.description;

  const gallery = document.getElementById("dab-book-media-gallery");
  gallery.innerHTML = `<img src="${book.imageUrl}" class="dab-uncompressed-img" style="max-height: 280px; object-fit: cover;" alt="Book Image">`;

  document.getElementById("dab-book-views-count").textContent = book.views || 0;
  document.getElementById("dab-book-downloads-count").textContent =
    book.downloads || 0;

  const downloadBtn = document.getElementById("dab-book-download-btn");
  downloadBtn.href = book.fileUrl;
  downloadBtn.download = book.fileName || "book.pdf";
  downloadBtn.onclick = () => {
    book.downloads = (book.downloads || 0) + 1;
    syncBookToSupabase(book);
    renderBooks();
  };

  updateBookLikeButtonState(book);
  renderBookCommentsSection(book);

  document.getElementById("btn-dab-book-like").onclick = () => {
    if (!currentUser) {
      document.getElementById("dab-book-modal").classList.remove("open");
      switchAuthPanel("login-form");
      document.getElementById("auth-modal").classList.add("open");
      return;
    }
    if (!Array.isArray(book.likes)) book.likes = [];
    const idx = book.likes.indexOf(currentUser.email);
    if (idx !== -1) book.likes.splice(idx, 1);
    else book.likes.push(currentUser.email);
    syncBookToSupabase(book);
    updateBookLikeButtonState(book);
  };

  document.getElementById("dab-book-modal").classList.add("open");
}

function updateBookLikeButtonState(book) {
  const btn = document.getElementById("btn-dab-book-like");
  const icon = document.getElementById("dab-book-heart-icon");
  const countEl = document.getElementById("dab-book-like-count");
  const likesCount = Array.isArray(book.likes) ? book.likes.length : 0;
  countEl.textContent = likesCount;
  const isLiked =
    currentUser &&
    Array.isArray(book.likes) &&
    book.likes.includes(currentUser.email);
  if (isLiked) {
    btn.classList.add("liked");
    icon.className = "fa-solid fa-heart";
  } else {
    btn.classList.remove("liked");
    icon.className = "fa-regular fa-heart";
  }
}

function switchBookCommentSort(sortType) {
  const book = sampleBooks.find(
    (b) => String(b.id) === String(activeModalBookId),
  );
  if (!book) return;
  book.commentSort = sortType;
  saveBooksToStorage();
  document
    .getElementById("book-sort-popular")
    .classList.toggle("active", sortType === "popular");
  document
    .getElementById("book-sort-newest")
    .classList.toggle("active", sortType === "newest");
  renderBookCommentsSection(book);
}

function renderBookCommentsSection(book) {
  const listEl = document.getElementById("book-comments-list-container");
  const countEl = document.getElementById("book-comments-count");
  const userAvatarEl = document.getElementById(
    "book-current-user-comment-avatar",
  );
  const dict = getDict();

  if (userAvatarEl && currentUser && currentUser.avatar)
    userAvatarEl.src = currentUser.avatar;

  const comments = Array.isArray(book.comments) ? [...book.comments] : [];
  countEl.textContent = comments.length;
  listEl.innerHTML = "";

  const sortMode = book.commentSort || "popular";
  if (sortMode === "popular") {
    comments.sort((a, b) => {
      const aScore =
        (a.likes ? a.likes.length : 0) - (a.dislikes ? a.dislikes.length : 0);
      const bScore =
        (b.likes ? b.likes.length : 0) - (b.dislikes ? b.dislikes.length : 0);
      return bScore - aScore;
    });
  } else {
    comments.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
  }

  if (comments.length === 0) {
    listEl.innerHTML = `<p style="color:var(--text-muted); font-size:0.85rem;">${dict.noBookCommentsText}</p>`;
    return;
  }

  comments.forEach((c) => {
    listEl.appendChild(createYouTubeCommentNode(c, book, false));
  });
}

function handleAddBookComment() {
  if (!currentUser) {
    document.getElementById("dab-book-modal").classList.remove("open");
    switchAuthPanel("login-form");
    document.getElementById("auth-modal").classList.add("open");
    return;
  }
  const dict = getDict();
  const input = document.getElementById("book-new-comment-input");
  const text = input.value.trim();
  if (!text || !activeModalBookId) return;

  const book = sampleBooks.find(
    (b) => String(b.id) === String(activeModalBookId),
  );
  if (!book) return;

  if (!Array.isArray(book.comments)) book.comments = [];
  const authorName = isAdminUser()
    ? "Admin"
    : isLibrarianUser()
      ? dict.optRoleLibrarian
      : `${currentUser.firstName} ${currentUser.lastName}`;

  book.comments.push({
    id: "comm_" + Date.now(),
    author: authorName,
    authorEmail: currentUser.email,
    avatar: currentUser.avatar,
    text,
    timestamp: Date.now(),
    likes: [],
    dislikes: [],
    replies: [],
  });

  input.value = "";
  syncBookToSupabase(book);
  renderBookCommentsSection(book);
}

// ================= YOUTUBE STYLE COMMENTS ENGINE =================
function createYouTubeCommentNode(c, itemTarget, isPostItem) {
  const div = document.createElement("div");
  div.className = "comment-item";
  const dict = getDict();

  const likesArr = Array.isArray(c.likes) ? c.likes : [];
  const dislikesArr = Array.isArray(c.dislikes) ? c.dislikes : [];
  const repliesArr = Array.isArray(c.replies) ? c.replies : [];

  const isLiked = currentUser && likesArr.includes(currentUser.email);
  const isDisliked = currentUser && dislikesArr.includes(currentUser.email);

  const checkmark = getSilverCheckmarkHtml(isAdminUser(c.authorEmail));

  div.innerHTML = `
    <img src="${c.avatar || "https://api.dicebear.com/7.x/initials/svg?seed=" + encodeURIComponent(c.author)}" class="comment-avatar" alt="User">
    <div class="comment-body-box">
      <div class="comment-meta">
        <span class="comment-author-name">${escapeHtml(c.author)} ${checkmark}</span>
        <span class="comment-time">${getSingleTypeRelativeTime(c.timestamp || Date.now())}</span>
      </div>
      <p class="comment-text">${escapeHtml(c.text)}</p>
      <div class="comment-actions-row">
        <button class="comment-action-btn ${isLiked ? "active" : ""}" onclick="toggleCommentLike('${itemTarget.id}', '${c.id}', ${isPostItem})">
          <i class="fa-solid fa-thumbs-up"></i> <span>${likesArr.length}</span>
        </button>
        <button class="comment-action-btn ${isDisliked ? "disliked active" : ""}" onclick="toggleCommentDislike('${itemTarget.id}', '${c.id}', ${isPostItem})">
          <i class="fa-solid fa-thumbs-down"></i>
        </button>
        <button class="comment-action-btn" onclick="toggleReplyBox('${c.id}')">
          <i class="fa-solid fa-reply"></i> ${dict.btnReply}
        </button>
      </div>

      <div class="reply-input-box" id="reply-box-${c.id}" style="display:none;">
        <input type="text" id="reply-input-${c.id}" placeholder="${dict.phReply}" style="flex:1; padding:0.4rem 0.6rem; border-radius:0.375rem; border:1px solid var(--border-color); background:var(--bg-primary); color:var(--text-main); font-size:0.8rem;" />
        <button class="btn btn-primary" style="padding:0.3rem 0.7rem; font-size:0.75rem;" onclick="submitCommentReply('${itemTarget.id}', '${c.id}', ${isPostItem})">${dict.btnSendReply}</button>
      </div>

      <div class="comment-replies-list" id="replies-list-${c.id}">
        ${repliesArr
          .map((r) => {
            const rCheckmark = getSilverCheckmarkHtml(
              isAdminUser(r.authorEmail),
            );
            return `
            <div style="display:flex; gap:0.6rem; align-items:flex-start;">
              <img src="${r.avatar || "https://api.dicebear.com/7.x/initials/svg?seed=" + encodeURIComponent(r.author)}" style="width:28px; height:28px; border-radius:50%; object-fit:cover;" alt="Reply">
              <div>
                <div style="font-size:0.75rem; color:var(--text-muted); display:flex; align-items:center; gap:0.3rem;">
                  <strong style="color:var(--text-main);">${escapeHtml(r.author)}</strong> ${rCheckmark} <span>${getSingleTypeRelativeTime(r.timestamp || Date.now())}</span>
                </div>
                <p style="font-size:0.85rem; color:var(--text-main); margin-top:0.15rem;">${escapeHtml(r.text)}</p>
              </div>
            </div>
          `;
          })
          .join("")}
      </div>
    </div>
  `;
  return div;
}

function toggleCommentLike(targetId, commentId, isPostItem) {
  if (!currentUser) {
    switchAuthPanel("login-form");
    document.getElementById("auth-modal").classList.add("open");
    return;
  }
  const item = isPostItem
    ? sampleAnnouncements.find((a) => String(a.id) === String(targetId))
    : sampleBooks.find((b) => String(b.id) === String(targetId));
  if (!item) return;

  const comm = item.comments.find((c) => String(c.id) === String(commentId));
  if (!comm) return;

  if (!Array.isArray(comm.likes)) comm.likes = [];
  if (!Array.isArray(comm.dislikes)) comm.dislikes = [];

  const likeIdx = comm.likes.indexOf(currentUser.email);
  const dislikeIdx = comm.dislikes.indexOf(currentUser.email);

  if (likeIdx !== -1) {
    comm.likes.splice(likeIdx, 1);
  } else {
    comm.likes.push(currentUser.email);
    if (dislikeIdx !== -1) comm.dislikes.splice(dislikeIdx, 1);
  }

  if (isPostItem) {
    syncAnnouncementToSupabase(item);
    renderCommentsSection(item);
  } else {
    syncBookToSupabase(item);
    renderBookCommentsSection(item);
  }
}

function toggleCommentDislike(targetId, commentId, isPostItem) {
  if (!currentUser) {
    switchAuthPanel("login-form");
    document.getElementById("auth-modal").classList.add("open");
    return;
  }
  const item = isPostItem
    ? sampleAnnouncements.find((a) => String(a.id) === String(targetId))
    : sampleBooks.find((b) => String(b.id) === String(targetId));
  if (!item) return;

  const comm = item.comments.find((c) => String(c.id) === String(commentId));
  if (!comm) return;

  if (!Array.isArray(comm.likes)) comm.likes = [];
  if (!Array.isArray(comm.dislikes)) comm.dislikes = [];

  const likeIdx = comm.likes.indexOf(currentUser.email);
  const dislikeIdx = comm.dislikes.indexOf(currentUser.email);

  if (dislikeIdx !== -1) {
    comm.dislikes.splice(dislikeIdx, 1);
  } else {
    comm.dislikes.push(currentUser.email);
    if (likeIdx !== -1) comm.likes.splice(likeIdx, 1);
  }

  if (isPostItem) {
    syncAnnouncementToSupabase(item);
    renderCommentsSection(item);
  } else {
    syncBookToSupabase(item);
    renderBookCommentsSection(item);
  }
}

function toggleReplyBox(commentId) {
  const box = document.getElementById(`reply-box-${commentId}`);
  if (box) {
    box.style.display = box.style.display === "none" ? "flex" : "none";
  }
}

function submitCommentReply(targetId, commentId, isPostItem) {
  if (!currentUser) {
    switchAuthPanel("login-form");
    document.getElementById("auth-modal").classList.add("open");
    return;
  }
  const dict = getDict();
  const input = document.getElementById(`reply-input-${commentId}`);
  const text = input ? input.value.trim() : "";
  if (!text) return;

  const item = isPostItem
    ? sampleAnnouncements.find((a) => String(a.id) === String(targetId))
    : sampleBooks.find((b) => String(b.id) === String(targetId));
  if (!item) return;

  const comm = item.comments.find((c) => String(c.id) === String(commentId));
  if (!comm) return;

  if (!Array.isArray(comm.replies)) comm.replies = [];
  const authorName = isAdminUser()
    ? "Admin"
    : isLibrarianUser()
      ? dict.optRoleLibrarian
      : `${currentUser.firstName} ${currentUser.lastName}`;

  comm.replies.push({
    author: authorName,
    authorEmail: currentUser.email,
    avatar: currentUser.avatar,
    text,
    timestamp: Date.now(),
  });

  input.value = "";
  if (isPostItem) {
    syncAnnouncementToSupabase(item);
    renderCommentsSection(item);
  } else {
    syncBookToSupabase(item);
    renderBookCommentsSection(item);
  }
}

function openFacultyModal(facultyId) {
  const member = facultyMembers.find((m) => m.id === Number(facultyId));
  if (!member) return;
  const dict = getDict();

  const initials = member.name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
  document.getElementById("faculty-modal-initials").textContent = initials;
  document.getElementById("faculty-modal-name").textContent = member.name;
  document.getElementById("faculty-modal-role").textContent = member.role;
  document.getElementById("faculty-modal-desc").textContent =
    member.description || dict.defaultFacultyDesc;

  document.getElementById("faculty-detail-modal").classList.add("open");
}

function renderMyPostsList() {
  const container = document.getElementById("user-my-posts-list");
  container.innerHTML = "";
  const dict = getDict();
  const myPosts =
    isAdminUser() || isLibrarianUser()
      ? sampleAnnouncements
      : sampleAnnouncements.filter((a) => a.authorEmail === currentUser.email);

  if (myPosts.length === 0) {
    container.innerHTML = `<p style="color:var(--text-muted); text-align:center; font-size:0.9rem; padding:1rem;">${dict.noMyPostsText}</p>`;
    return;
  }

  myPosts.forEach((post) => {
    const title =
      typeof post.title === "object"
        ? post.title[currentLang] || post.title.uz
        : post.title;
    const itemCard = document.createElement("div");
    itemCard.className = "dashboard-post-card";
    const likesNum = Array.isArray(post.likes)
      ? post.likes.length
      : post.likes || 0;

    itemCard.innerHTML = `
      <div>
        <span class="card-tag">${post.type.toUpperCase()}</span>
        <h4 style="font-size:1rem; margin:0.3rem 0;">${title}</h4>
        <div style="font-size:0.8rem; color:var(--text-muted); display:flex; gap:1rem; flex-wrap:wrap;">
          <span><i class="fa-solid fa-eye"></i> ${post.views || 0}</span>
          <span><i class="fa-solid fa-heart" style="color:#ef4444;"></i> ${likesNum}</span>
          <span><i class="fa-solid fa-calendar"></i> ${post.date}</span>
        </div>
        <div style="margin-top: 0.75rem;">
          <button class="btn btn-secondary" style="padding: 0.2rem 0.5rem; font-size:0.75rem; color:#ef4444; border-color:#ef4444;" onclick="deleteAnnouncement('${post.id}')">${dict.btnDeletePost}</button>
        </div>
      </div>
    `;
    container.appendChild(itemCard);
  });
}

function toggleSavedSubtab(type) {
  if (type === "saved") {
    document.getElementById("subtab-saved-btn").classList.add("active");
    document.getElementById("subtab-liked-btn").classList.remove("active");
    document.getElementById("saved-announcements-list").classList.add("active");
    document
      .getElementById("liked-announcements-list")
      .classList.remove("active");
  } else {
    document.getElementById("subtab-liked-btn").classList.add("active");
    document.getElementById("subtab-saved-btn").classList.remove("active");
    document.getElementById("liked-announcements-list").classList.add("active");
    document
      .getElementById("saved-announcements-list")
      .classList.remove("active");
  }
}

function renderSavedAndLikedLists() {
  if (!currentUser) return;
  const dict = getDict();
  const savedContainer = document.getElementById("saved-announcements-list");
  const likedContainer = document.getElementById("liked-announcements-list");
  savedContainer.innerHTML = "";
  likedContainer.innerHTML = "";

  const savedPosts = sampleAnnouncements.filter(
    (a) => a.savedBy && a.savedBy.includes(currentUser.email),
  );
  const likedPosts = sampleAnnouncements.filter(
    (a) => Array.isArray(a.likes) && a.likes.includes(currentUser.email),
  );

  if (savedPosts.length === 0) {
    savedContainer.innerHTML = `<p style="color:var(--text-muted); padding:1rem; text-align:center;">${dict.noSavedPosts}</p>`;
  } else {
    savedPosts.forEach((post) => {
      const title =
        typeof post.title === "object"
          ? post.title[currentLang] || post.title.uz
          : post.title;
      savedContainer.appendChild(createSavedLikedCard(post, title));
    });
  }

  if (likedPosts.length === 0) {
    likedContainer.innerHTML = `<p style="color:var(--text-muted); padding:1rem; text-align:center;">${dict.noLikedPosts}</p>`;
  } else {
    likedPosts.forEach((post) => {
      const title =
        typeof post.title === "object"
          ? post.title[currentLang] || post.title.uz
          : post.title;
      likedContainer.appendChild(createSavedLikedCard(post, title));
    });
  }
}

function createSavedLikedCard(post, title) {
  const dict = getDict();
  const card = document.createElement("div");
  card.className = "dashboard-post-card";
  card.style.cursor = "pointer";
  card.onclick = () => {
    document.getElementById("profile-modal").classList.remove("open");
    openAnnouncementModal(post.id);
  };
  card.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center;">
      <div>
        <span class="card-tag">${post.type.toUpperCase()}</span>
        <h4 style="font-size:0.95rem; margin:0.2rem 0;">${title}</h4>
        <span style="font-size:0.75rem; color:var(--text-muted);">${dict.authorPrefix} ${post.author}</span>
      </div>
      <i class="fa-solid fa-chevron-right" style="color:var(--text-muted);"></i>
    </div>
  `;
  return card;
}

function renderNotificationsList() {
  const container = document.getElementById("user-notifications-list");
  container.innerHTML = "";
  const dict = getDict();
  const myPosts = sampleAnnouncements.filter(
    (a) => a.authorEmail === currentUser.email,
  );
  let hasActivity = false;

  myPosts.forEach((post) => {
    const title =
      typeof post.title === "object"
        ? post.title[currentLang] || post.title.uz
        : post.title;
    if (post.enrolled && post.enrolled.length > 0) {
      hasActivity = true;
      post.enrolled.forEach((en) => {
        const card = document.createElement("div");
        card.className = "dashboard-post-card";
        card.innerHTML = `<p style="font-size:0.85rem;"><i class="fa-solid fa-user-check" style="color:var(--primary);"></i> <strong>${escapeHtml(en.name)}</strong> (${escapeHtml(en.email)}) &rarr; <em>«${escapeHtml(title)}»</em> <span style="color:var(--text-muted); font-size:0.75rem;">(${escapeHtml(en.date)})</span>.</p>`;
        container.appendChild(card);
      });
    }
  });

  if (!hasActivity) {
    container.innerHTML = `<p style="color:var(--text-muted); text-align:center; font-size:0.9rem; padding:1rem;">${dict.noNotifText}</p>`;
  }
}

function calculateTotalEnrolledForUser(userEmail) {
  const myPosts = sampleAnnouncements.filter(
    (a) => a.authorEmail === userEmail,
  );
  let total = 0;
  myPosts.forEach((p) => {
    if (p.enrolled) total += p.enrolled.length;
  });
  return total;
}

function renderBadgesRoadmap() {
  if (!currentUser) return;
  const dict = getDict();
  const container = document.getElementById("badges-roadmap-container");
  container.innerHTML = "";
  const currentEnrolled = calculateTotalEnrolledForUser(currentUser.email);

  const badgeTiers = [
    { key: "D", name: "Gold (D)", target: 100, letter: "D" },
    { key: "C", name: "Platinum (C)", target: 200, letter: "C" },
    { key: "B", name: "Diamond (B)", target: 500, letter: "B" },
    { key: "A", name: "Ace (A)", target: 2000, letter: "A" },
    { key: "S", name: "Crown (S)", target: 5000, letter: "S" },
    { key: "star", name: "STAR Conqueror", target: 50000, letter: "★" },
  ];

  badgeTiers.forEach((tier) => {
    const isEarned = currentEnrolled >= tier.target;
    const card = document.createElement("div");
    card.className = `badge-roadmap-card ${isEarned ? "unlocked" : ""}`;
    card.innerHTML = `
      <div class="badge-icon-disc" style="background:var(--primary); color:#fff; border-radius:50%;">${tier.letter}</div>
      <div class="badge-info-wrap">
        <div class="badge-title-row">
          <h5>${tier.name}</h5>
          <span class="badge-status-tag ${isEarned ? "earned" : ""}">${isEarned ? dict.badgeUnlocked : dict.badgeLocked}</span>
        </div>
        <p style="font-size:0.75rem; color:var(--text-muted);">${dict.badgeTargetPrefix} ${tier.target} ${dict.badgeTargetSuffix}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

function initTheme() {
  const savedTheme = localStorage.getItem("nurtech-theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("nurtech-theme", newTheme);
  updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
  const icon = document.getElementById("theme-icon");
  if (icon)
    icon.className = theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
}

function initLanguage() {
  const selectEl = document.getElementById("lang-select");
  if (selectEl) selectEl.value = currentLang;
  setLanguage(currentLang);
}

function setText(id, val) {
  const el = document.getElementById(id);
  if (el && val !== undefined) el.textContent = val;
}

function setPlaceholder(id, val) {
  const el = document.getElementById(id);
  if (el && val !== undefined) el.placeholder = val;
}

function setTitle(id, val) {
  const el = document.getElementById(id);
  if (el && val !== undefined) el.title = val;
}

function setLanguage(lang) {
  if (!translations[lang]) lang = "uz";
  currentLang = lang;
  localStorage.setItem("nurtech-lang", lang);
  document.documentElement.setAttribute("lang", lang);

  const dict = getDict();
  document.title = dict.pageTitle;

  // Navbar & Header
  setText("txt-brand-sub", dict.brandSub);
  setText("nav-home", dict.navHome);
  setText("nav-news", dict.navNews);
  setText("nav-library-link", dict.navLibrary);
  setText("nav-about-label", dict.navAbout);
  setText("nav-nurtech-info", dict.navNurtechInfo);
  setText("nav-faculty-info", dict.navFacultyInfo);
  setText("nav-privacy-info", dict.navPrivacyInfo);
  setText("nav-hub-info", dict.navHubInfo);
  setText("nav-contact", dict.navContact);
  setTitle("theme-toggle", dict.themeToggleTitle);

  // Cookie Modal
  setText("txt-cookie-title", dict.cookieTitle);
  setText("txt-cookie-desc", dict.cookieDesc);
  setText("btn-cookie-all", dict.cookieAll);
  setText("btn-cookie-necessary", dict.cookieNecessary);

  // Hero & Stats
  setText("txt-hero-badge", dict.heroBadge);
  setText("txt-hero-title", dict.heroTitle);
  setText("txt-motto-1-h", dict.motto1H);
  setText("txt-motto-1-p", dict.motto1P);
  setText("txt-motto-2-h", dict.motto2H);
  setText("txt-motto-2-p", dict.motto2P);
  setText("btn-hero-explore", dict.btnExplore);
  setText("btn-hero-contact", dict.btnContact);
  setText("stat-students", dict.statStudents);
  setText("stat-workshops", dict.statWorkshops);
  setText("stat-teachers", dict.statTeachers);
  setText("stat-employment", dict.statEmployment);
  setTitle("btn-edit-stat-students", dict.editPenTitle);
  setTitle("btn-edit-stat-workshops", dict.editPenTitle);
  setTitle("btn-edit-stat-teachers", dict.editPenTitle);
  setTitle("btn-edit-stat-employment", dict.editPenTitle);

  // Announcements Section & Filter Modal
  setText("txt-news-title", dict.newsTitle);
  setText("txt-news-sub", dict.newsSub);
  setText("txt-sec-ann-title", dict.newsTitle);
  setText("txt-sec-ann-sub", dict.newsSub);
  setPlaceholder("announcement-search", dict.annSearchPlaceholder);
  setText("lbl-filter-btn", dict.lblFilterBtn);
  setText("lbl-filter-modal-title", dict.lblFilterModalTitle);
  setText("lbl-filter-modal-desc", dict.lblFilterModalDesc);
  setText("lbl-cat-title", dict.lblCatTitle);
  setText("filt-all", dict.filtAll);
  setText("filt-exam", dict.filtExam);
  setText("filt-club", dict.filtClub);
  setText("filt-comp", dict.filtComp);
  setText("filt-event", dict.filtEvent);
  setText("lbl-sort-title", dict.lblSortTitle);
  setText("sort-new", dict.sortNew);
  setText("sort-likes", dict.sortLikes);
  setText("sort-enrolls", dict.sortEnrolls);
  setText("sort-views", dict.sortViews);
  setText("btn-apply-filter", dict.btnApplyFilter);

  // Contact & Footer
  setText("txt-contact-title", dict.contactTitle);
  setText("txt-contact-sub", dict.contactSub);
  setText("txt-sec-contact-title", dict.contactTitle);
  setText("txt-sec-contact-sub", dict.contactSub);
  setText("lbl-address", dict.lblAddress);
  setText("txt-address", dict.txtAddress);
  setText("map-click-hint", dict.mapClickHint);
  setText("lbl-phone", dict.lblPhone);
  setText("lbl-telegram", dict.lblTelegram);
  setText("tg-click-hint", dict.tgClickHint);
  setPlaceholder("form-name", dict.phFormName);
  setPlaceholder("form-email", dict.phFormEmail);
  setPlaceholder("form-msg", dict.phFormMsg);
  setText("btn-send", dict.btnSend);
  setText("txt-footer", dict.footerText);

  // E-Library & Book Modals
  setText("txt-lib-title", dict.libTitle);
  setText("txt-lib-sub", dict.libSub);
  setPlaceholder("library-search", dict.libSearchPlaceholder);
  setText("lib-cat-all", dict.libCatAll);
  setText("lib-cat-it", dict.libCatIt);
  setText("lib-cat-tech", dict.libCatTech);
  setText("lib-cat-science", dict.libCatScience);
  setText("lib-cat-literature", dict.libCatLiterature);
  setText("lib-cat-other", dict.libCatOther);
  setText("book-modal-title", dict.bookModalTitle);
  setText("lbl-book-title", dict.lblBookTitle);
  setPlaceholder("book-title-input", dict.phBookTitle);
  setText("lbl-book-author", dict.lblBookAuthor);
  setPlaceholder("book-author-input", dict.phBookAuthor);
  setText("lbl-book-category", dict.lblBookCategory);
  setText("book-opt-it", dict.libCatIt);
  setText("book-opt-tech", dict.libCatTech);
  setText("book-opt-science", dict.libCatScience);
  setText("book-opt-literature", dict.libCatLiterature);
  setText("book-opt-other", dict.libCatOther);
  setText("lbl-book-file", dict.lblBookFile);
  setText("lbl-book-image", dict.lblBookImage);
  setText("lbl-book-desc", dict.lblBookDesc);
  setPlaceholder("book-desc-input", dict.phBookDesc);
  setText("btn-save-book", dict.btnSaveBook);
  setText("lbl-dab-book-download", dict.bookDabDownloadBtn);
  setText("lbl-book-views-word", dict.bookViewsWord);
  setText("lbl-book-downloads-word", dict.bookDownloadsWord);
  setText("lbl-book-comments-header", dict.bookCommentsHeader);
  setText("book-sort-popular", dict.sortPopular);
  setText("book-sort-newest", dict.sortNewest);
  setPlaceholder("book-new-comment-input", dict.bookCommentPlaceholder);
  setText("btn-submit-book-comment", dict.btnSubmitComment);

  // About Section Tabs & Content
  setText("lbl-tab-nurtech", dict.lblTabNurtech);
  setText("lbl-tab-faculty", dict.lblTabFaculty);
  setText("lbl-tab-privacy", dict.lblTabPrivacy);
  setText("lbl-tab-hub", dict.lblTabHub);

  setText("txt-ab-title", dict.txtAbTitle);
  setText("txt-ab-sub", dict.txtAbSub);
  setText("txt-ab-h1", dict.txtAbH1);
  setText("txt-ab-p1", dict.txtAbP1);
  setText("txt-ab-h2", dict.txtAbH2);
  setText("txt-ab-f1-t", dict.txtAbF1T);
  setText("txt-ab-f1-d", dict.txtAbF1D);
  setText("txt-ab-f2-t", dict.txtAbF2T);
  setText("txt-ab-f2-d", dict.txtAbF2D);
  setText("txt-ab-f3-t", dict.txtAbF3T);
  setText("txt-ab-f3-d", dict.txtAbF3D);
  setText("txt-ab-grad-t", dict.txtAbGradT);
  setText("txt-ab-grad-d", dict.txtAbGradD);
  setText("txt-grad-1-t", dict.txtGrad1T);
  setText("txt-grad-1-d", dict.txtGrad1D);
  setText("txt-grad-2-t", dict.txtGrad2T);
  setText("txt-grad-2-d", dict.txtGrad2D);
  setText("txt-grad-3-t", dict.txtGrad3T);
  setText("txt-grad-3-d", dict.txtGrad3D);
  setText("txt-ab-quote", dict.txtAbQuote);

  setText("txt-fields-main-title", dict.fieldsMainTitle);
  setText("txt-fields-cat1", dict.fieldsCat1);
  setText("txt-fields-cat2", dict.fieldsCat2);
  setText("f-item-1", dict.fItem1);
  setText("f-item-2", dict.fItem2);
  setText("f-item-3", dict.fItem3);
  setText("f-item-4", dict.fItem4);
  setText("f-item-5", dict.fItem5);
  setText("f-item-6", dict.fItem6);
  setText("f-item-7", dict.fItem7);
  setText("f-item-8", dict.fItem8);
  setText("f-item-9", dict.fItem9);
  setText("f-item-10", dict.fItem10);
  setText("f-item-11", dict.fItem11);
  setText("f-item-12", dict.fItem12);

  // Faculty & Staff
  setText("txt-faculty-title", dict.facultyTitle);
  setText("txt-faculty-sub", dict.facultySub);
  setPlaceholder("faculty-search", dict.searchPlaceholder);
  setTitle("faculty-prev", dict.prevTitle);
  setTitle("faculty-next", dict.nextTitle);
  setText("lbl-faculty-modal-desc", dict.lblFacultyModalDesc);
  setText("staff-modal-title", dict.staffModalTitle);
  setText("lbl-staff-name", dict.lblStaffName);
  setPlaceholder("staff-name-input", dict.phStaffName);
  setText("lbl-staff-role", dict.lblStaffRole);
  setPlaceholder("staff-role-input", dict.phStaffRole);
  setText("lbl-staff-desc", dict.lblStaffDesc);
  setPlaceholder("staff-desc-input", dict.phStaffDesc);
  setText("btn-save-staff", dict.btnSaveStaff);

  // Privacy Policy
  setText("txt-priv-title", dict.txtPrivTitle);
  setText("txt-priv-intro", dict.txtPrivIntro);
  setText("txt-priv-r1-t", dict.txtPrivR1T);
  setText("txt-priv-r1", dict.txtPrivR1);
  setText("txt-priv-r2-t", dict.txtPrivR2T);
  setText("txt-priv-r2", dict.txtPrivR2);
  setText("txt-priv-r3-t", dict.txtPrivR3T);
  setText("txt-priv-r3", dict.txtPrivR3);
  setText("txt-priv-r4-t", dict.txtPrivR4T);
  setText("txt-priv-r4", dict.txtPrivR4);

  // Student Hub
  setText("txt-hub-title", dict.hubTitle);
  setText("txt-hub-sub", dict.hubSub);
  setText("txt-hub-f1-title", dict.hubF1Title);
  setText("txt-hub-f1-desc", dict.hubF1Desc);
  setText("txt-hub-f2-title", dict.hubF2Title);
  setText("txt-hub-f2-desc", dict.hubF2Desc);
  setText("txt-hub-f3-title", dict.hubF3Title);
  setText("txt-hub-f3-desc", dict.hubF3Desc);
  setText("txt-hub-f4-title", dict.hubF4Title);
  setText("txt-hub-f4-desc", dict.hubF4Desc);
  setText("txt-hub-f5-title", dict.hubF5Title);
  setText("txt-hub-f5-desc", dict.hubF5Desc);

  // Detailed Announcement Modal, Share & Report Modals
  setText("lbl-dab-save", dict.lblDabSave);
  setTitle("dab-save-btn", dict.lblDabSave);
  setText("lbl-act-share", dict.lblActShare);
  setText("lbl-act-report", dict.lblActReport);
  setText("lbl-views-text", dict.lblViewsText);
  setText("lbl-comments-header", dict.lblCommentsHeader);
  setText("post-sort-popular", dict.sortPopular);
  setText("post-sort-newest", dict.sortNewest);
  setPlaceholder("new-comment-input", dict.phNewComment);
  setText("btn-submit-comment", dict.btnSubmitComment);
  setText("lbl-share-modal-title", dict.lblShareModalTitle);
  setText("lbl-share-modal-desc", dict.lblShareModalDesc);
  setText("lbl-copy-link", dict.lblCopyLink);
  setText("lbl-report-modal-title", dict.lblReportModalTitle);
  setText("lbl-report-modal-desc", dict.lblReportModalDesc);
  setPlaceholder("report-desc", dict.phReportDesc);
  setText("btn-submit-report", dict.btnSubmitReport);

  // Auth Modal
  setText("auth-login-title", dict.authLoginTitle);
  setText("lbl-log-email", dict.lblLogEmail);
  setPlaceholder("login-email", dict.phLogEmail);
  setText("lbl-log-pass", dict.lblLogPass);
  setText("btn-login-submit", dict.btnLoginSubmit);
  setText("txt-no-account", dict.txtNoAccount);
  setText("link-to-register", dict.linkRegister);
  setText("txt-or-admin", dict.txtOrAdmin);
  setText("txt-are-you-admin", dict.txtAreYouAdmin);
  setText("auth-admin-title", dict.authAdminTitle);
  setText("txt-admin-desc", dict.txtAdminDesc);
  setText("lbl-admin-pass", dict.lblAdminPass);
  setText("btn-admin-submit", dict.btnAdminSubmit);
  setText("link-admin-back", dict.linkAdminBack);

  setText("auth-register-title", dict.authRegisterTitle);
  setText("lbl-reg-name", dict.lblRegName);
  setPlaceholder("reg-firstname", dict.phRegName);
  setText("lbl-reg-surname", dict.lblRegSurname);
  setPlaceholder("reg-lastname", dict.phRegSurname);
  setText("lbl-reg-email", dict.lblRegEmail);
  setText("lbl-reg-pass", dict.lblRegPass);
  setText("lbl-reg-role", dict.lblRegRole);
  setText("opt-role-student", dict.optRoleStudent);
  setText("opt-role-faculty", dict.optRoleFaculty);
  setText("btn-reg-submit", dict.btnRegSubmit);
  setText("txt-has-account", dict.txtHasAccount);
  setText("link-to-login", dict.linkLogin);

  // Profile Dashboard Modal
  setTitle("stat-wrap-views", dict.statViewsTooltip);
  setTitle("stat-wrap-likes", dict.statLikesTooltip);
  setTitle("stat-wrap-enrolls", dict.statEnrollsTooltip);
  setText("lbl-prof-tab-over", dict.tabOverview);
  setText("lbl-prof-tab-posts", dict.tabPosts);
  setText("lbl-prof-tab-saved", dict.tabSaved);
  setText("lbl-prof-tab-notif", dict.tabNotif);
  setText("lbl-prof-tab-badges", dict.tabBadges);
  setText("lbl-prof-file", dict.lblProfFile);
  setText("lbl-prof-name", dict.lblProfName);
  setText("lbl-prof-surname", dict.lblProfSurname);
  setText("lbl-prof-email", dict.lblProfEmail);
  setText("lbl-prof-pass", dict.lblProfPass);
  setPlaceholder("prof-edit-password", dict.phProfPass);
  setText("btn-save-profile", dict.btnSaveProfile);
  setText("btn-logout", dict.btnLogoutTxt);
  setText("lbl-my-posts-title", dict.lblMyPostsTitle);
  setText("btn-open-post-from-dash", dict.btnAddPostDash);
  setText("lbl-subtab-saved", dict.lblSubtabSaved);
  setText("lbl-subtab-liked", dict.lblSubtabLiked);
  setText("lbl-notif-title", dict.lblNotifTitle);
  setText("lbl-badges-title", dict.lblBadgesTitle);
  setText("lbl-badges-desc", dict.lblBadgesDesc);

  // Post Modal
  setText("post-modal-header-title", dict.postModalHeader);
  setText("lbl-post-cat", dict.lblPostCat);
  setTitle("icon-post-cat-hint", dict.postCatHintTitle);
  setText("opt-cat-exam", dict.optCatExam);
  setText("opt-cat-club", dict.optCatClub);
  setText("opt-cat-comp", dict.optCatComp);
  setText("opt-cat-event", dict.optCatEvent);
  setText("lbl-post-heading", dict.lblPostHeading);
  setPlaceholder("post-title", dict.phPostHeading);
  setText("lbl-post-deadline", dict.lblPostDeadline);
  setText("lbl-allow-enroll-text", dict.lblAllowEnrollText);
  setText("lbl-post-media", dict.lblPostMedia);
  setText("lbl-media-hint", dict.lblMediaHint);
  setText("lbl-post-tags-hint", dict.lblPostTagsHint);
  setPlaceholder("tag-single-input", dict.phPostTags);
  setText("lbl-post-body", dict.lblPostBody);
  setPlaceholder("post-text", dict.phPostBody);
  setText("btn-publish-post", dict.btnPublishPost);

  const postTextVal = document.getElementById("post-text")?.value.trim() || "";
  const wCount = postTextVal ? postTextVal.split(/\s+/).length : 0;
  setText("word-count-badge", `${dict.wordCountPrefix} ${wCount} / 10`);

  renderAuthWidget();
  renderAnnouncements();
  renderBooks();
  renderFaculty(document.getElementById("faculty-search")?.value || "");
}

function getSingleTypeRelativeTime(timestampMs) {
  const dict = getDict();
  const diffSeconds = Math.floor((Date.now() - timestampMs) / 1000);
  if (diffSeconds < 60) return dict.timeJustNow;
  const diffMinutes = Math.floor(diffSeconds / 60);
  if (diffMinutes < 60) return `${diffMinutes} ${dict.timeMinsAgo}`;
  const diffHours = Math.floor(diffMinutes / 60);
  if (diffHours < 24) return `${diffHours} ${dict.timeHoursAgo}`;
  const diffDays = Math.floor(diffHours / 24);
  if (diffDays < 30) return `${diffDays} ${dict.timeDaysAgo}`;
  const diffMonths = Math.floor(diffDays / 30);
  return `${diffMonths} ${dict.timeMonthsAgo}`;
}

function renderAnnouncements() {
  const grid = document.getElementById("announcements-grid");
  if (!grid) return;
  grid.innerHTML = "";
  const dict = getDict();

  const searchInput = document.getElementById("announcement-search");
  const searchQuery = searchInput ? searchInput.value.toLowerCase().trim() : "";

  let filtered = [...sampleAnnouncements];

  if (currentFilter !== "all") {
    filtered = filtered.filter((a) => a.type === currentFilter);
  }

  if (searchQuery) {
    filtered = filtered.filter((a) => {
      const title = (
        typeof a.title === "object"
          ? a.title[currentLang] || a.title.uz
          : a.title
      ).toLowerCase();
      const text = (
        typeof a.text === "object" ? a.text[currentLang] || a.text.uz : a.text
      ).toLowerCase();
      const tags = (a.tags || []).join(" ").toLowerCase();
      return (
        title.includes(searchQuery) ||
        text.includes(searchQuery) ||
        tags.includes(searchQuery)
      );
    });
  }

  filtered.sort((a, b) => {
    const aLikes = Array.isArray(a.likes) ? a.likes.length : a.likes || 0;
    const bLikes = Array.isArray(b.likes) ? b.likes.length : b.likes || 0;
    const aEnrolls = a.enrolled ? a.enrolled.length : 0;
    const bEnrolls = b.enrolled ? b.enrolled.length : 0;

    if (currentSort === "likes") return bLikes - aLikes;
    if (currentSort === "enrolls") return bEnrolls - aEnrolls;
    if (currentSort === "views") return (b.views || 0) - (a.views || 0);
    return (b.timestamp || 0) - (a.timestamp || 0);
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; color:var(--text-muted); padding: 2rem;">${dict.noAnnouncementsText}</p>`;
    return;
  }

  const today = new Date().toISOString().split("T")[0];

  filtered.forEach((ann) => {
    const rawTitle =
      typeof ann.title === "object"
        ? ann.title[currentLang] || ann.title.uz
        : ann.title;
    const rawText =
      typeof ann.text === "object"
        ? ann.text[currentLang] || ann.text.uz
        : ann.text;
    const title = escapeHtml(rawTitle);
    const text = escapeHtml(rawText);

    const likesArray = Array.isArray(ann.likes) ? ann.likes : [];
    const likesCount = likesArray.length;
    const isLikedByUser = currentUser && likesArray.includes(currentUser.email);
    const isFinished = ann.deadline && ann.deadline < today;

    let imageMedia = null;
    if (ann.media && ann.media.length > 0) {
      imageMedia = ann.media.find((m) => m.type === "image");
    }

    const authorAvatar = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(ann.author || "User")}`;
    const checkmark = getSilverCheckmarkHtml(
      isAdminUser(ann.authorEmail, ann.isAdminPost),
    );

    const card = document.createElement("div");
    card.className = "ldab-card";
    card.onclick = (e) => {
      if (
        e.target.closest(".heart-like-btn") ||
        e.target.closest(".admin-delete-post-btn")
      )
        return;
      openAnnouncementModal(ann.id);
    };

    const deleteBtnHtml = isAdminUser()
      ? `<button class="admin-delete-post-btn" title="${dict.btnDeletePost}" onclick="event.stopPropagation(); deleteAnnouncement('${ann.id}')">
          <i class="fa-solid fa-trash"></i>
        </button>`
      : "";

    let mediaTopHtml = "";
    if (imageMedia) {
      mediaTopHtml = `
        <div class="ldab-media-wrap">
          <img src="${imageMedia.url}" class="ldab-img" alt="Media" loading="lazy">
          <div class="ldab-image-overlay-title">${title}</div>
        </div>
      `;
    }

    card.innerHTML = `
      ${deleteBtnHtml}
      ${mediaTopHtml}
      <div class="ldab-content">
        <div>
          <div class="ldab-author-row">
            <img src="${authorAvatar}" class="ldab-author-avatar" alt="Avatar" loading="lazy">
            <span class="ldab-author-name">${escapeHtml(ann.author || "Admin")} ${checkmark}</span>
          </div>
          ${!imageMedia ? `<h3 class="ldab-title-main">${title}</h3>` : ""}
          <p class="ldab-desc-short">${text.substring(0, 100)}...</p>
        </div>

        <div class="ldab-footer-row">
          <div>
            ${
              isFinished
                ? `<span class="finished-badge">${dict.finishedText}</span>`
                : `<span><i class="fa-regular fa-clock"></i> ${getSingleTypeRelativeTime(ann.timestamp || Date.now())}</span>`
            }
          </div>
          <button class="heart-like-btn ${isLikedByUser ? "liked" : ""}" onclick="toggleLikePost('${ann.id}', event)">
            <i class="${isLikedByUser ? "fa-solid" : "fa-regular"} fa-heart"></i>
            <span>${likesCount}</span>
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function toggleLikePost(postId, event) {
  if (event) event.stopPropagation();
  if (!currentUser) {
    switchAuthPanel("login-form");
    document.getElementById("auth-modal").classList.add("open");
    return;
  }

  const ann = sampleAnnouncements.find((a) => String(a.id) === String(postId));
  if (!ann) return;

  if (!Array.isArray(ann.likes)) ann.likes = [];
  const idx = ann.likes.indexOf(currentUser.email);
  if (idx !== -1) {
    ann.likes.splice(idx, 1);
  } else {
    ann.likes.push(currentUser.email);
  }

  syncAnnouncementToSupabase(ann);
  renderAnnouncements();
}

function openAnnouncementModal(id) {
  const ann = sampleAnnouncements.find((a) => String(a.id) === String(id));
  if (!ann) return;
  const dict = getDict();

  activeActiveModalPostId = id;
  ann.views = (ann.views || 0) + 1;
  localStorage.setItem(
    "nurtech-announcements",
    JSON.stringify(sampleAnnouncements),
  );

  const title =
    typeof ann.title === "object"
      ? ann.title[currentLang] || ann.title.uz
      : ann.title;
  const text =
    typeof ann.text === "object"
      ? ann.text[currentLang] || ann.text.uz
      : ann.text;

  const checkmark = getSilverCheckmarkHtml(
    isAdminUser(ann.authorEmail, ann.isAdminPost),
  );

  document.getElementById("dab-author-avatar").src =
    `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(ann.author || "User")}`;
  document.getElementById("dab-author-name").innerHTML =
    `${ann.author || "Admin"} ${checkmark}`;
  document.getElementById("dab-author-badge").textContent =
    ann.type.toUpperCase();
  document.getElementById("dab-time-ago").textContent =
    getSingleTypeRelativeTime(ann.timestamp || Date.now());

  document.getElementById("modal-title").textContent = title;
  document.getElementById("modal-body").textContent = text;
  document.getElementById("modal-views-count").textContent = ann.views;

  const deadlineEl = document.getElementById("modal-deadline");
  deadlineEl.textContent = ann.deadline
    ? `${dict.deadlineLabel} ${ann.deadline}`
    : "";

  const gallery = document.getElementById("modal-media-gallery");
  gallery.innerHTML = "";
  if (ann.media && ann.media.length > 0) {
    ann.media.forEach((m) => {
      if (m.type === "image") {
        const img = document.createElement("img");
        img.src = m.url;
        img.className = "dab-uncompressed-img";
        gallery.appendChild(img);
      } else if (m.type === "video") {
        const vid = document.createElement("video");
        vid.src = m.url;
        vid.controls = true;
        vid.className = "dab-uncompressed-img";
        gallery.appendChild(vid);
      } else if (m.type === "document") {
        const docLink = document.createElement("a");
        docLink.href = m.url;
        docLink.download = m.name || "document";
        docLink.className = "btn btn-secondary";
        docLink.style.marginTop = "0.5rem";
        docLink.innerHTML = `<i class="fa-solid fa-file-arrow-down"></i> ${m.name || dict.docLabel}`;
        gallery.appendChild(docLink);
      }
    });
  }

  const tagsDiv = document.getElementById("modal-tags-container");
  tagsDiv.innerHTML = "";
  if (ann.tags && ann.tags.length > 0) {
    ann.tags.forEach((t) => {
      const span = document.createElement("span");
      span.className = "tag-badge";
      span.textContent = `#${t}`;
      tagsDiv.appendChild(span);
    });
  }

  updateDabSaveButtonState(ann);
  updateDabLikeButtonState(ann);
  renderCommentsSection(ann);

  document.getElementById("dab-save-btn").onclick = () => {
    if (!currentUser) {
      document.getElementById("modal").classList.remove("open");
      switchAuthPanel("login-form");
      document.getElementById("auth-modal").classList.add("open");
      return;
    }
    if (!ann.savedBy) ann.savedBy = [];
    const idx = ann.savedBy.indexOf(currentUser.email);
    if (idx !== -1) ann.savedBy.splice(idx, 1);
    else ann.savedBy.push(currentUser.email);
    localStorage.setItem(
      "nurtech-announcements",
      JSON.stringify(sampleAnnouncements),
    );
    updateDabSaveButtonState(ann);
  };

  document.getElementById("btn-dab-like").onclick = () => {
    if (!currentUser) {
      document.getElementById("modal").classList.remove("open");
      switchAuthPanel("login-form");
      document.getElementById("auth-modal").classList.add("open");
      return;
    }
    if (!Array.isArray(ann.likes)) ann.likes = [];
    const idx = ann.likes.indexOf(currentUser.email);
    if (idx !== -1) ann.likes.splice(idx, 1);
    else ann.likes.push(currentUser.email);
    localStorage.setItem(
      "nurtech-announcements",
      JSON.stringify(sampleAnnouncements),
    );
    updateDabLikeButtonState(ann);
    renderAnnouncements();
  };

  document.getElementById("modal").classList.add("open");
}

function updateDabSaveButtonState(ann) {
  const dict = getDict();
  const btn = document.getElementById("dab-save-btn");
  const icon = document.getElementById("dab-save-icon");
  const lbl = document.getElementById("lbl-dab-save");
  const isSaved =
    currentUser && ann.savedBy && ann.savedBy.includes(currentUser.email);
  if (isSaved) {
    btn.classList.add("saved");
    icon.className = "fa-solid fa-bookmark";
    if (lbl) lbl.textContent = dict.lblDabSaved;
  } else {
    btn.classList.remove("saved");
    icon.className = "fa-regular fa-bookmark";
    if (lbl) lbl.textContent = dict.lblDabSave;
  }
}

function updateDabLikeButtonState(ann) {
  const btn = document.getElementById("btn-dab-like");
  const icon = document.getElementById("dab-heart-icon");
  const countEl = document.getElementById("modal-like-count");
  const likesCount = Array.isArray(ann.likes) ? ann.likes.length : 0;
  countEl.textContent = likesCount;
  const isLiked =
    currentUser &&
    Array.isArray(ann.likes) &&
    ann.likes.includes(currentUser.email);
  if (isLiked) {
    btn.classList.add("liked");
    icon.className = "fa-solid fa-heart";
  } else {
    btn.classList.remove("liked");
    icon.className = "fa-regular fa-heart";
  }
}

function switchPostCommentSort(sortType) {
  const ann = sampleAnnouncements.find(
    (a) => String(a.id) === String(activeActiveModalPostId),
  );
  if (!ann) return;
  ann.commentSort = sortType;
  localStorage.setItem(
    "nurtech-announcements",
    JSON.stringify(sampleAnnouncements),
  );
  document
    .getElementById("post-sort-popular")
    .classList.toggle("active", sortType === "popular");
  document
    .getElementById("post-sort-newest")
    .classList.toggle("active", sortType === "newest");
  renderCommentsSection(ann);
}

function renderCommentsSection(ann) {
  const listEl = document.getElementById("comments-list-container");
  const countEl = document.getElementById("comments-count");
  const userAvatarEl = document.getElementById("current-user-comment-avatar");
  const dict = getDict();

  if (userAvatarEl && currentUser && currentUser.avatar) {
    userAvatarEl.src = currentUser.avatar;
  }

  const comments = Array.isArray(ann.comments) ? [...ann.comments] : [];
  countEl.textContent = comments.length;
  listEl.innerHTML = "";

  const sortMode = ann.commentSort || "popular";
  if (sortMode === "popular") {
    comments.sort((a, b) => {
      const aScore =
        (a.likes ? a.likes.length : 0) - (a.dislikes ? a.dislikes.length : 0);
      const bScore =
        (b.likes ? b.likes.length : 0) - (b.dislikes ? b.dislikes.length : 0);
      return bScore - aScore;
    });
  } else {
    comments.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
  }

  if (comments.length === 0) {
    listEl.innerHTML = `<p style="color:var(--text-muted); font-size:0.85rem;">${dict.noCommentsText}</p>`;
    return;
  }

  comments.forEach((c) => {
    listEl.appendChild(createYouTubeCommentNode(c, ann, true));
  });
}

function handleAddComment() {
  if (!currentUser) {
    document.getElementById("modal").classList.remove("open");
    switchAuthPanel("login-form");
    document.getElementById("auth-modal").classList.add("open");
    return;
  }
  const dict = getDict();
  const input = document.getElementById("new-comment-input");
  const text = input.value.trim();
  if (!text || !activeActiveModalPostId) return;

  const ann = sampleAnnouncements.find(
    (a) => String(a.id) === String(activeActiveModalPostId),
  );
  if (!ann) return;

  if (!Array.isArray(ann.comments)) ann.comments = [];
  const authorName = isAdminUser()
    ? "Admin"
    : isLibrarianUser()
      ? dict.optRoleLibrarian
      : `${currentUser.firstName} ${currentUser.lastName}`;

  ann.comments.push({
    id: "comm_" + Date.now(),
    author: authorName,
    authorEmail: currentUser.email,
    avatar: currentUser.avatar,
    text,
    timestamp: Date.now(),
    likes: [],
    dislikes: [],
    replies: [],
  });

  input.value = "";
  syncAnnouncementToSupabase(ann);
  renderCommentsSection(ann);
}

function shareToPlatform(platform) {
  const dict = getDict();
  const url = encodeURIComponent(window.location.href);
  const title = encodeURIComponent("NURTech — Nurobod 1-Son Texnikumi");

  if (platform === "telegram") {
    window.open(`https://t.me/share/url?url=${url}&text=${title}`, "_blank");
  } else if (platform === "twitter") {
    window.open(
      `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
      "_blank",
    );
  } else if (platform === "facebook") {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      "_blank",
    );
  } else if (platform === "copy") {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(window.location.href);
    }
    showToast(dict.toastLinkCopied, "success");
  }
  document.getElementById("share-modal").classList.remove("open");
}

// ================= STAFF / FACULTY MANAGEMENT =================
function openStaffModalForCreate() {
  if (!isAdminUser()) return;
  clearAllInlineErrors();
  document.getElementById("edit-staff-id").value = "";
  document.getElementById("staff-form").reset();
  document.getElementById("staff-modal").classList.add("open");
}

function toggleStaffMenu(staffId, event) {
  event.stopPropagation();
  const menu = document.getElementById(`staff-menu-${staffId}`);
  const isOpen = menu.classList.contains("open");
  document
    .querySelectorAll(".staff-dots-menu.open")
    .forEach((m) => m.classList.remove("open"));
  if (!isOpen) menu.classList.add("open");
}

function renderFaculty(filter = "") {
  const grid = document.getElementById("faculty-grid");
  if (!grid) return;
  grid.innerHTML = "";
  const dict = getDict();

  const q = filter.toLowerCase();
  const filtered = facultyMembers.filter(
    (p) => p.name.toLowerCase().includes(q) || p.role.toLowerCase().includes(q),
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / facultyPerPage));
  if (facultyCurrentPage >= totalPages) facultyCurrentPage = totalPages - 1;

  const start = facultyCurrentPage * facultyPerPage;
  const end = start + facultyPerPage;
  const pageItems = filtered.slice(start, end);

  if (pageItems.length === 0) {
    grid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; color:var(--text-muted); padding: 2rem;">${dict.noStaffFound}</p>`;
  } else {
    pageItems.forEach((person) => {
      const initials = person.name
        .split(" ")
        .slice(0, 2)
        .map((n) => n[0])
        .join("")
        .toUpperCase();
      const card = document.createElement("div");
      card.className = "faculty-card-item";
      card.onclick = (e) => {
        if (e.target.closest(".staff-dots-wrap")) return;
        openFacultyModal(person.id);
      };

      const adminDotsHtml = isAdminUser()
        ? `<div class="staff-dots-wrap">
            <button type="button" class="staff-dots-btn" onclick="toggleStaffMenu(${person.id}, event)">
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </button>
            <div class="staff-dots-menu" id="staff-menu-${person.id}">
              <button type="button" class="danger" onclick="deleteStaffMember(${person.id})">
                <i class="fa-solid fa-trash"></i> ${dict.btnDeletePost}
              </button>
            </div>
          </div>`
        : "";

      card.innerHTML = `
        <div style="display:flex; align-items:center; gap:0.85rem;">
          <div style="width:44px; height:44px; min-width:44px; border-radius:50%; background:linear-gradient(135deg, var(--primary), var(--glow-purple)); color:#fff; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:0.95rem;">${initials}</div>
          <div style="flex:1; min-width:0;">
            <h4 style="font-size:0.95rem; margin-bottom:0.15rem; word-break:break-word;">${escapeHtml(person.name)}</h4>
            <p style="font-size:0.8rem; color:var(--text-muted);">${escapeHtml(person.role)}</p>
          </div>
          ${adminDotsHtml}
        </div>
      `;
      grid.appendChild(card);
    });
  }

  document.getElementById("faculty-pagination-indicator").textContent =
    `${dict.pageLabel} ${facultyCurrentPage + 1} / ${totalPages}`;
  document
    .getElementById("faculty-prev")
    .classList.toggle("disabled", facultyCurrentPage === 0);
  document
    .getElementById("faculty-next")
    .classList.toggle("disabled", facultyCurrentPage >= totalPages - 1);
}

function initCounterAnimation() {
  const counters = document.querySelectorAll(".stat-num");
  const speed = 200;

  const animate = (counter) => {
    const target = +counter.getAttribute("data-target");
    const statType = counter.getAttribute("data-stat");
    const rawCurrent = counter.innerText.replace(/[^0-9]/g, "");
    const count = +rawCurrent || 0;
    const inc = Math.max(1, target / speed);

    if (count < target) {
      const nextVal = Math.min(target, Math.ceil(count + inc));
      if (statType === "workshops") {
        counter.innerText = "+" + nextVal;
      } else if (statType === "employment") {
        counter.innerText = nextVal + "%";
      } else {
        counter.innerText = nextVal;
      }
      setTimeout(() => animate(counter), 15);
    } else {
      if (statType === "workshops") {
        counter.innerText = "+" + target;
      } else if (statType === "employment") {
        counter.innerText = target + "%";
      } else {
        counter.innerText = target;
      }
    }
  };

  counters.forEach((counter) => animate(counter));
}
