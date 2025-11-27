import React from 'react'

export default function Features(){
  const items = [
    {icon:'🎯', title:'תוכנית אימונים', desc:'תוכנית אימונים מבוססת ראיות בהתאמה אישית.'},
    {icon:'📹', title:"צ׳ק-אין וידאו שבועי", desc:'סרטון משוב אישי עם ניתוח טכני.'},
    {icon:'🍎', title:'אסטרטגיות דיאטה', desc:'עבודה עם דיאטה אינטואיטיבית או תפריט מותאם.'},
    {icon:'⚡', title:'ניהול עומסים מתקדם', desc:'פיריודיזציה לשיפור ביצועים.'},
    {icon:'💬', title:'תמיכה בצ׳אט', desc:'זמינות ותמיכה שוטפת.'},
    {icon:'📊', title:'מדדים ושקיפות', desc:'מעקב סטטיסטי אחרי התקדמות.'}
  ]
  return (
    // הוספה: aria-labelledby מקשר את האזור לכותרת שלו
    <section id="features" className="features" aria-labelledby="features-title">
      <div className="container">
        {/* הוספה: id המשמש כיעד ל-aria-labelledby */}
        <h2 id="features-title" className="section-title">מה בליווי?</h2>
        
        {/* תיקון: הפיכת ה-grid ל-ul (רשימה סמנטית) */}
        <ul className="features-grid">
          {items.map((it,i)=> (
            // תיקון: הפיכת כל "כרטיס" לפריט רשימה (li)
            <li key={i} className="feature-card">
              {/* תיקון: הסתרת האמוג'י הדקורטיבי מקוראי מסך */}
              <div className="feature-icon" aria-hidden="true">{it.icon}</div>
              <h3>{it.title}</h3>
              <p>{it.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}