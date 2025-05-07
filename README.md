# 🌿 Massage Therapy Website

A calming and modern website built with Flask for a massage therapy practice. Features include service listings, therapist info, and a floating booking button integrated with Google Calendar.

---

## 🔧 Tech Stack

- **Python (Flask)** – Backend and routing
- **HTML/CSS** – Templating and styling
- **JavaScript** – Booking modal behavior
- **Google Calendar** – Appointment scheduling (via embed)

---

## 📁 Project Structure
massage_site/
├── app.py
├── requirements.txt
├── static/
│ ├── css/
│ └── images/
├── templates/
│ ├── base.html
│ ├── home.html
│ ├── about.html
│ ├── services.html
│ ├── booking.html
│ └── contact.html
└── .gitignore

---

## 🚀 Running Locally

1. Clone the repo:

git clone https://github.com/yourusername/massage-site.git
cd massage-site


2. Create a virtual environment and install dependencies:

python -m venv venv
source venv/bin/activate
pip install -r requirements.txt


3. Run the Flask app:

python app.py


4. Open your browser:

http://127.0.0.1:5000/


---

## 📅 Booking Integration

The floating “Book Now” button on the site opens a scheduler connected to a Google Calendar, allowing visitors to book available time slots.

---

## ✨ Future Features

- Contact form with email notifications
- Admin dashboard to manage appointments
- SEO and performance optimization