// // Function to Toggle Modal Visibility
// function toggleModal() {
//     const modal = document.getElementById('habitModal');
//     modal.classList.toggle('hidden');
// }

// // Generate 31 Days in Table Header
// const tableHeader = document.getElementById('table-header');
// if (tableHeader) {
//     for (let i = 1; i <= 31; i++) {
//         const th = document.createElement('th');
//         th.className = "p-3 text-center border-x border-slate-100 min-w-[45px] font-bold text-slate-600 text-xs";
//         th.innerText = i;
//         tableHeader.appendChild(th);
//     }
// }

// // Populate Habit Rows with Checkboxes
// const habitBody = document.getElementById('habit-body');
// const demoHabits = [
//     { name: "5:30 AM Wake Up ⏰", checkedDays: [1, 3, 5, 7, 10] },
//     { name: "Cold Shower 🚿", checkedDays: [2, 4, 6, 8] }
// ];

// if (habitBody) {
//     demoHabits.forEach(habit => {
//         const tr = document.createElement('tr');

//         // Habit Name Cell
//         let html = `<td class="p-5 sticky-column font-bold text-slate-700">${habit.name}</td>`;

//         // Checkboxes for 31 Days
//         for (let i = 1; i <= 31; i++) {
//             const isChecked = habit.checkedDays.includes(i) ? 'checked' : '';
//             html += `<td class="p-3 text-center"><input type="checkbox" ${isChecked} class="habit-check"></td>`;
//         }

//         tr.innerHTML = html;
//         habitBody.appendChild(tr);
//     });
// }


// ১. Modal Toggle Function
function toggleModal() {
    document.getElementById('habitModal').classList.toggle('hidden');
}

// ২. ডেমো ডাটা অ্যারে (এটি আপনি পরে Django থেকে আনবেন)
const demoHabits = [
    { name: "5:30 AM Wake Up", icon: "⏰", color: "text-amber-500", done: [1, 2, 3, 5, 6, 7, 10, 12, 14, 15, 18] },
    { name: "Deep Work (4hr)", icon: "💻", color: "text-blue-500", done: [1, 2, 4, 5, 8, 9, 11, 12, 15, 16] },
    { name: "Gym Workout", icon: "🏋️‍♂️", color: "text-red-500", done: [2, 4, 6, 8, 10, 12, 14] },
    { name: "Reading 20 Pages", icon: "📚", color: "text-emerald-500", done: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 20] },
    { name: "Meditation", icon: "🧘‍♂️", color: "text-purple-500", done: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    { name: "No Junk Food", icon: "🍎", color: "text-orange-500", done: [1, 2, 3, 4, 5, 10, 11, 15, 20] }
];

// ৩. টেবিল হেডার জেনারেট করা (১ থেকে ৩১ তারিখ)
const tableHeader = document.getElementById('table-header');
for (let i = 1; i <= 31; i++) {
    const th = document.createElement('th');
    th.className = "p-3 text-center border-x border-slate-100 min-w-[48px] font-bold text-slate-500 text-xs";
    th.innerHTML = `<div class="opacity-40 text-[9px]">JAN</div><div>${i}</div>`;
    tableHeader.appendChild(th);
}

// ৪. টেবিল বডিতে ডেমো ডাটা ইনজেক্ট করা
const habitBody = document.getElementById('habit-body');
demoHabits.forEach(habit => {
    const tr = document.createElement('tr');
    tr.className = "group transition-all";

    // Habit Name Cell with Icon
    let rowHtml = `
        <td class="p-5 sticky-column">
            <div class="flex items-center gap-3">
                <span class="text-xl">${habit.icon}</span>
                <span class="font-bold text-slate-700 group-hover:text-blue-600 transition">${habit.name}</span>
            </div>
        </td>
    `;

    // 31 Days Checkboxes
    for (let day = 1; day <= 31; day++) {
        const checked = habit.done.includes(day) ? 'checked' : '';
        rowHtml += `
            <td class="p-3 text-center border-x border-slate-50/50">
                <input type="checkbox" ${checked} class="habit-check">
            </td>
        `;
    }

    tr.innerHTML = rowHtml;
    habitBody.appendChild(tr);
});

// ৫. Analysis Sidebar এ ডেমো ডাটা দেখানো
const analysisContainer = document.getElementById('analysis-container');
let analysisHtml = '';

demoHabits.slice(0, 3).forEach(habit => {
    const progress = Math.round((habit.done.length / 31) * 100);
    analysisHtml += `
        <div class="space-y-2">
            <div class="flex justify-between text-xs font-bold">
                <span class="text-slate-600">${habit.name}</span>
                <span class="text-blue-600">${progress}%</span>
            </div>
            <div class="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div class="bg-blue-600 h-full transition-all duration-1000" style="width: ${progress}%"></div>
            </div>
        </div>
    `;
});
analysisContainer.innerHTML = analysisHtml;