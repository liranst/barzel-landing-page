import React from 'react'
import img6 from '../assets/images/6.png'

export default function Footer(){
  // הגדרת סגנון בסיסי לקישור כדי לא לחזור על הקוד
  const linkStyle = {
    color: '#ffffff',      // צבע טקסט לבן
    textDecoration: 'none' // ביטול קו תחתון
  };

  // הגדרת סגנון לקו המפריד
  const separatorStyle = {
    margin: '0 8px', 
    color: '#ffffff'       // צבע הקו לבן
  };

  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <img src={img6} width="150px" alt="BARZEL Coaching" className="footer-logo" />
          
          <div className="footer-contact">
            {/* גם כאן הוספתי את הסטייל כדי שיהיו לבנים */}
            <a href="mailto:Barelklor@gmail.com" style={linkStyle}>Barelklor@gmail.com</a>
            <a href="tel:+972546222479" style={linkStyle}>054-6222479</a>
            
            <a 
              href="https://wa.me/972546222479" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="WhatsApp (נפתח בלשונית חדשה)"
              style={linkStyle}
            >
              WhatsApp
            </a>
            <a 
              href="https://instagram.com/Barelklor" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram (נפתח בלשונית חדשה)"
              style={linkStyle}
            >
              Instagram
            </a>
          </div>

          {/* החלק של הקישורים עם המפרידים */}
          <nav className="footer-links" style={{marginTop:20}} aria-label="קישורי עזר">
            <a href="/privacy.html" style={linkStyle}>מדיניות פרטיות</a>
            
            <span style={separatorStyle}>|</span>
            
            <a href="/terms.html" style={linkStyle}>תנאי שימוש</a>
            
            <span style={separatorStyle}>|</span>
            
            <a href="/disclaimer.html" style={linkStyle}>הצהרת בריאות</a>
          </nav>
        </div>
        
        <div className="footer-bottom">
          <p style={{ color: '#ffffff' }}>&copy; 2024 BARZEL Coaching. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  )
}