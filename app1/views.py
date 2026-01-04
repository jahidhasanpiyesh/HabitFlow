from django.shortcuts import render
import datetime

def home(request):
    demo_habits = [
        { "name": "5:30 AM Wake Up", "icon": "⏰", "done": [1, 2, 3, 5, 7, 10, 12, 14, 15, 18], "progress": 45 },
        { "name": "Deep Work (4hr)", "icon": "💻", "done": [1, 2, 4, 5, 8, 9, 11, 12, 15], "progress": 30 },
        { "name": "Gym Workout", "icon": "🏋️‍♂️", "done": [2, 4, 6, 8, 10, 12, 14], "progress": 20 },
        { "name": "Reading 20 Pages", "icon": "📚", "done": [1, 3, 5, 7, 9, 11], "progress": 15 },
    ]
    
    # mounting days data with day names
    days_data = []
    for d in range(1, 32):
        date_obj = datetime.date(2026, 1, d)
        days_data.append({
            'num': d,
            'name': date_obj.strftime('%a')  # This data is automatic update date base Thu, Fri, Sat 
        })

    context = {
        'habits': demo_habits,
        'days_data': days_data, # This data is used to loop through the days calender
    }
    return render(request, 'index.html', context)