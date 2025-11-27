import React from 'react'
import { openPopup } from '../utils/openPopup'
import { InlineWidget } from 'react-calendly'

export default function Hero(){
  return (
    // הוספה: קישור האזור לכותרת שלו
    <section id="hero" className="hero" aria-labelledby="hero-title">
      <div className="container">
        {/* הוספה: ID לכותרת הראשית של הדף */}
        <h1 id="hero-title" className="hero-title">להתאמן כמו מקצוענים, עם מקצוענים.</h1>
        <p className="hero-subtitle">אימון מבוסס ראיות. תהליך בהתאמה אישית. ניסיון עשיר. תוצאות מובטחות.</p>
        <div className="hero-buttons">
          
          {/* תיקון: הפיכת הקישור ל-<button> */}
          {/* כיוון שהוא מבצע פעולה (פתיחת פופאפ) ולא ניווט */}
          <button 
            type="button" 
            className="btn-primary" 
            onClick={(e) => openPopup("https://calendly.com/barzelonlinecoaching/coaching-call")}
          >
            הגשת מועמדות לליווי אונליין
          </button>

          {/* תיקון: הוספת פתיחה בטאב חדש + אזהרה לקורא מסך */}
          <a 
            href="https://wa.me/972546222479" 
            className="btn-primary" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="לאימונים פרונטליים (נפתח בטאב חדש)"
          >
            לאימונים פרונטליים
          </a>
          
          {/* תיקון: הוספת פתיחה בטאב חדש + אזהרה לקורא מסך */}
          <a 
            href="https://wa.me/972546222479" 
            className="btn-primary" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="לשיעורי פוזינג (נפתח בטאב חדש)"
          >
            לשיעורי פוזינג
          </a>
        </div>
        <p className="hero-note">מקומות מוגבלים. לרציניים בלבד. חובבנים ותחרותיים</p>
      </div>
    </section>
  )
}