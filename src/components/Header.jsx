import React, { useState } from 'react'
import img11 from '../assets/images/img-11.png'  // ✅ default import, not {png}

export default function Header() {
  const [open, setOpen] = useState(false)

  // פונקציה לסגירת התפריט (לשימוש בלחיצה על קישור)
  const closeMenu = () => setOpen(false)

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo-container">
            {/* תיקון: הקישור של הלוגו מוביל עכשיו לדף הבית (/) ולא ל-# */}
            {/* תיקון: טקסט אלטרנטיבי מדויק יותר */}
            <a href="/" className="logo">
              <img src={img11} alt="BARZEL - חזרה לדף הבית" />
            </a>
          </div>
          <button
            className="nav-toggle"
            aria-label="תפריט ניווט"
            onClick={() => setOpen(v => !v)}
            // הוספה: aria-expanded מדווח לקורא מסך אם התפריט פתוח או סגור
            aria-expanded={open}
            // הוספה: aria-controls מקשר סמנטית בין הכפתור לתפריט שהוא פותח
            aria-controls="main-nav"
          >
            ☰
          </button>
          <nav 
            // הוספה: id ליצירת הקישור מ-aria-controls
            id="main-nav"
            className={`nav ${open ? 'show' : ''}`}
            // הוספה: 'hidden' מחליף את הצורך ב-aria-hidden
            // ומבטיח שהתפריט מוסתר לחלוטין (גם ויזואלית וגם מקוראי מסך) כשהוא סגור
            hidden={!open}
          >
            {/* הוספה: onClick לסגירת התפריט הנייד לאחר בחירת קישור */}
            <a href="#hero" className="cta-btn-small" onClick={closeMenu}>להתחיל</a>
            <a href="#about" onClick={closeMenu}>נעים להכיר</a>
            <a href="#pricing" onClick={closeMenu}>תוכניות</a>
            <a href="#features" onClick={closeMenu}>מה בליווי</a>
            <a href="#results" onClick={closeMenu}>הקהילה</a>
            <a href="#faq" onClick={closeMenu}>שאלות</a>
            <a href="#contact" onClick={closeMenu}>צור קשר</a>
          </nav>
        </div>
      </div>
    </header>
  )
}