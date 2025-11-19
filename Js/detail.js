/* ---------------- SLIDER ---------------- */
        const slides = document.querySelector(".slides");
        const images = document.querySelectorAll(".slides img");
        const prev = document.querySelector(".prev");
        const next = document.querySelector(".next");
        let index = 0;

        function showSlide(i) {
            index = (i + images.length) % images.length;
            slides.style.transform = `translateX(-${index * 100}%)`;
        }
        prev.onclick = () => showSlide(index - 1);
        next.onclick = () => showSlide(index + 1);

        /* ---------------- ACCORDION ---------------- */
        document.querySelectorAll(".accordion-btn").forEach((btn) => {
            btn.addEventListener("click", () => {
                const content = btn.nextElementSibling;
                content.style.display =
                    content.style.display === "block" ? "none" : "block";
            });
        });

        /* ---------------- FEEDBACK FORM SHOW/HIDE ---------------- */
        /* -------- FEEDBACK POPUP -------- */
        const fbBtn = document.querySelector(".feedback-btn");
        const fbForm = document.querySelector(".feedback-form");
        const overlay = document.querySelector(".overlay");

        fbBtn.onclick = () => {
            const isOpen = fbForm.style.display === "block";

            fbForm.style.display = isOpen ? "none" : "block";
            overlay.style.display = isOpen ? "none" : "block";

            fbBtn.innerHTML = isOpen
                ? '<i class="fa-solid fa-comment"></i> Gửi phản hồi'
                : '<i class="fa-solid fa-xmark"></i> Đóng';
        };

        /* Bấm ra ngoài thì tắt popup */
        overlay.onclick = () => {
            fbForm.style.display = "none";
            overlay.style.display = "none";
            fbBtn.innerHTML = '<i class="fa-solid fa-comment"></i> Gửi phản hồi';
        };
        /* -------- HANDLE SUBMIT FEEDBACK -------- */
        const fbSubmit = document.querySelector(".feedback-form button");
        const notify = document.querySelector(".notify");

        fbSubmit.onclick = (e) => {
            e.preventDefault(); // ngăn load lại trang

            // Hiện thông báo
            notify.style.display = "block";

            // Ẩn popup + overlay
            fbForm.style.display = "none";
            overlay.style.display = "none";

            // Đổi nút về trạng thái ban đầu
            fbBtn.innerHTML = '<i class="fa-solid fa-comment"></i> Gửi phản hồi';

            // Tự tắt thông báo sau 2 giây
            setTimeout(() => {
                notify.style.display = "none";
            }, 1800);
        };

        /* -------- RATING STAR EFFECT -------- */
        // const stars = document.querySelectorAll(".rating i");
        // stars.forEach((star, i) => {
        //   star.addEventListener("click", () => {
        //     stars.forEach((s, idx) => {
        //       s.classList.toggle("active", idx <= i);
        //     });
        //   });
        // });



        /* ---------------- RATING STAR EFFECT ---------------- */
        const stars = document.querySelectorAll(".rating i");
        stars.forEach((star, i) => {
            star.addEventListener("click", () => {
                stars.forEach((s, index) => {
                    s.classList.toggle("active", index <= i);
                    s.style.transform = index <= i ? "scale(1.2)" : "scale(1)";
                });
                setTimeout(() => {
                    stars.forEach((s) => (s.style.transform = "scale(1)"));
                }, 200);
            });
        });


        