
document.querySelector('.search input').addEventListener('input', function () {
    const query = this.value.toLowerCase(); // تحويل النص إلى حروف صغيرة
    const stores = document.querySelectorAll('.product .swiper-slide .product-content h3'); // العثور على أسماء المتاجر
    let hasResults = false; // متغير لتتبع إذا كانت هناك نتائج
    let firstMatch = null; // لتحديد أول تطابق

    stores.forEach(store => {
        const storeCard = store.closest('.swiper-slide'); // العنصر الأب (بطاقة المتجر)
        if (store.textContent.toLowerCase().includes(query)) {
            storeCard.style.display = ''; // إظهار العنصر إذا تطابق
            hasResults = true; // تم العثور على نتيجة
            if (!firstMatch) {
                firstMatch = storeCard; // تحديد أول تطابق
            }
        } else {
            storeCard.style.display = 'none'; // إخفاء العنصر إذا لم يتطابق
        }
    });

    // إظهار أو إخفاء رسالة "لا توجد نتائج"
    let noResultsMessage = document.querySelector('#noResults');
    if (!noResultsMessage) {
        // إذا لم تكن الرسالة موجودة، قم بإنشائها
        noResultsMessage = document.createElement('p');
        noResultsMessage.id = 'noResults';
        noResultsMessage.style.textAlign = 'center';
        noResultsMessage.style.color = 'black';
        noResultsMessage.style.fontSize = '20px'; // حجم النص
        noResultsMessage.style.fontWeight = 'bold'; // جعل النص عريضًا
        noResultsMessage.style.marginTop = '10px'; // مسافة صغيرة أعلى
        noResultsMessage.textContent = 'لا توجد نتائج مطابقة';
        // إضافة الرسالة أسفل مربع البحث
        document.querySelector('.search').appendChild(noResultsMessage);
    }

    if (hasResults) {
        noResultsMessage.style.display = 'none'; // إخفاء الرسالة إذا كانت هناك نتائج
        if (firstMatch) {
            firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' }); // الانتقال إلى أول تطابق
        }
    } else {
        noResultsMessage.style.display = 'block'; // إظهار الرسالة إذا لم تكن هناك نتائج
    }
});



function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
}

// إخفاء القائمة عند الضغط خارجها
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}


// اختيار عنصر الشريط الجانبي من الصفحة
let navbar = document.querySelector('.navbar');

// تعيين وظيفة عند النقر على زر القائمة
document.querySelector('#menu-bar').onclick = () => {
    // تبديل الفئة 'active' بين إضافة وإزالة من عنصر navbar
    navbar.classList.toggle('active');
}

// اختيار عنصر البحث من الصفحة
let search = document.querySelector('.search');

// تعيين وظيفة عند النقر على زر البحث
document.querySelector('#search').onclick = () => {
    // تبديل الفئة 'active' بين إضافة وإزالة من عنصر search
    search.classList.toggle('active');
}

// إنشاء نموذج سلايدر للمنتجات باستخدام مكتبة Swiper
var swiper = new Swiper(".product-row", {
    spaceBetween: 30, // المسافة بين الشرائح
    loop: true, // تكرار الشرائح بشكل دائري
    centeredSlides: true, // جعل الشرائح مركزية
    autoplay: {
        delay: 9500, // تأخير التبديل بين الشرائح بالميلي ثانية
        disableOnInteraction: false, // السماح بالتبديل التلقائي حتى بعد التفاعل مع السلايدر
    },
    pagination: {
        el: ".swiper-pagination", // عنصر التعداد (الترقيم) للسلايدر
        clickable: true, // جعل التعداد قابل للنقر
    },
    breakpoints: {
        0: {
            slidesPerView: 1, // عدد الشرائح المعروضة على الشاشات الصغيرة
        },
        768: {
            slidesPerView: 2, // عدد الشرائح المعروضة على الشاشات المتوسطة
        },
        1024: {
            slidesPerView: 3, // عدد الشرائح المعروضة على الشاشات الكبيرة
        },
    },
});

// إنشاء نموذج سلايدر للمدونات باستخدام مكتبة Swiper
var swiper = new Swiper(".blogs-row", {
    spaceBetween: 30, // المسافة بين الشرائح
    loop: true, // تكرار الشرائح بشكل دائري
    centeredSlides: true, // جعل الشرائح مركزية
    autoplay: {
        delay: 9500, // تأخير التبديل بين الشرائح بالميلي ثانية
        disableOnInteraction: false, // السماح بالتبديل التلقائي حتى بعد التفاعل مع السلايدر
    },
    pagination: {
        el: ".swiper-pagination", // عنصر التعداد (الترقيم) للسلايدر
        clickable: true, // جعل التعداد قابل للنقر
    },
    navigation: {
        nextEl: ".swiper-button-next", // عنصر زر التالي
        prevEl: ".swiper-button-prev", // عنصر زر السابق
    },
    breakpoints: {
        0: {
            slidesPerView: 1, // عدد الشرائح المعروضة على الشاشات الصغيرة
        },
        768: {
            slidesPerView: 1, // عدد الشرائح المعروضة على الشاشات المتوسطة
        },
        1024: {
            slidesPerView: 1, // عدد الشرائح المعروضة على الشاشات الكبيرة
        },
    },
});

// إنشاء نموذج سلايدر للمراجعات باستخدام مكتبة Swiper
var swiper = new Swiper(".review-row", {
    spaceBetween: 30, // المسافة بين الشرائح
    loop: true, // تكرار الشرائح بشكل دائري
    centeredSlides: true, // جعل الشرائح مركزية
    autoplay: {
        delay: 9500, // تأخير التبديل بين الشرائح بالميلي ثانية
        disableOnInteraction: false, // السماح بالتبديل التلقائي حتى بعد التفاعل مع السلايدر
    },
    pagination: {
        el: ".swiper-pagination", // عنصر التعداد (الترقيم) للسلايدر
        clickable: true, // جعل التعداد قابل للنقر
    },
    breakpoints: {
        0: {
            slidesPerView: 1, // عدد الشرائح المعروضة على الشاشات الصغيرة
        },
        768: {
            slidesPerView: 2, // عدد الشرائح المعروضة على الشاشات المتوسطة
        },
        1024: {
            slidesPerView: 3, // عدد الشرائح المعروضة على الشاشات الكبيرة
        },
    },
});


document.addEventListener("DOMContentLoaded", () => {
    const reviewForm = document.getElementById("reviewForm");
    const reviewMessage = document.getElementById("reviewMessage");

    reviewForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form from refreshing the page

        const rating = document.getElementById("reviewRating").value;
        const reviewText = document.getElementById("reviewText").value;

        if (rating && reviewText) {
            console.log("Rating:", rating);
            console.log("Review:", reviewText);

            // Display thank-you message
            reviewMessage.style.display = "block";

            // Optionally clear the form after submission
            reviewForm.reset();
        } else {
            alert("Please fill out all fields before submitting your review.");
        }
    });
});
