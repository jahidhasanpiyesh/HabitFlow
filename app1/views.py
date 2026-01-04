from django.shortcuts import render

def home(request):
    # Demo data for habits
    demo_habits = [
        { "name": "5:30 AM Wake Up", "icon": "⏰", "done": [1, 2, 3, 5, 7, 10, 12, 14, 15, 18], "progress": 45 },
        { "name": "Deep Work (4hr)", "icon": "💻", "done": [1, 2, 4, 5, 8, 9, 11, 12, 15], "progress": 30 },
        { "name": "Gym Workout", "icon": "🏋️‍♂️", "done": [2, 4, 6, 8, 10, 12, 14], "progress": 20 },
        { "name": "Reading 20 Pages", "icon": "📚", "done": [1, 3, 5, 7, 9, 11], "progress": 15 },
    ]
    
    context = {
        'habits': demo_habits,
        'days_range': range(1, 32), # Day numbers from 1 to 31
        'days_name': ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    }
    return render(request, 'index.html', context)