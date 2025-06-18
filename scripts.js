console.log("Скриптът се зарежда!");
document.addEventListener("DOMContentLoaded", () => {
    // Формата за покупка
    const purchaseForm = document.querySelector(".purchase-form");
    if (purchaseForm) {
        purchaseForm.addEventListener("submit", (e) => {
            e.preventDefault(); // спира презареждането
            const nameInput = purchaseForm.querySelector("input[name='name']");// Взимаме стойността от полето за име
            const buyerName = nameInput.value.trim(); // Премахва празните интервали
            if (buyerName) {
                alert(`${buyerName}, благодарим за поръчката!`);
                purchaseForm.reset(); // Изчиства полетата на формата
            } else {
                alert("Моля, въведете име.");
            }
        });
    }

    // === ОБРАБОТКА НА ФОРМАТА ЗА РЕВЮ ===
const reviewForm = document.querySelector(".review-form");
const reviewsSection = document.querySelector(".reviews");

if (reviewForm && reviewsSection) {
    reviewForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Спира презареждането на страницата

        const textarea = reviewForm.querySelector("textarea");
        const comment = textarea.value.trim();

        if (comment) {
            const p = document.createElement("p");
            p.textContent = comment;

            // Намираме първия параграф (първото ревю)
            const firstReview = reviewsSection.querySelector("p");

            if (firstReview) {
                // Вмъкваме новото ревю преди първото съществуващо ревю
                reviewsSection.insertBefore(p, firstReview);
            } else {
                // Ако няма други ревюта, просто го добавяме
                reviewsSection.appendChild(p);
            }

            textarea.value = ""; // Изчистваме текстовото поле
        }
    });
}
});