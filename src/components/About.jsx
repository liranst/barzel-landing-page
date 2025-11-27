import React from 'react'

export default function About(){
  return (
    // הוספה: aria-labelledby מקשר את האזור לכותרת שלו
    <section id="about" className="about" aria-labelledby="about-title">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            {/* הוספה: id המשמש כיעד ל-aria-labelledby */}
            <h2 id="about-title">נעים להכיר</h2>
            <p className="about-description">שמי <strong>בראל קלור</strong>, מאמן כח מוסמך, שופט תחרותי, מנחה פוזינג, ומפתח גוף טבעי מקצועי בעל כרטיס <strong>WNBF Pro</strong>.  אני עוסק בענף למעלה מעשור שמהלכם זכיתי במר ישראל וייצגתי את המדינה באליפות העולם בארצות הברית.</p>
            <p className="about-description">את הידע שצברתי בזירה התחרותית אני משלב עם הבנה מדעית ופסיכולוגית מעמיקה, כסטודנט לפסיכולוגיה באוניברסיטת רייכמן וכמאמן שמאמין ששורש השינוי מתחיל בתודעה.</p>
            <p className="about-description">עבדתי פרונטלית ומרחוק עם עשרות מתאמנים בכל רמות הניסיון, מהצעד הראשון בחדר הכושר ועד לאתלטים ומתחרים מתקדמים - למטרות פיתוח כח ומסת שריר.</p>
            <p className="about-description">התהליך שאני בונה לכל מתאמן הוא אישי, בשילוב מתודה וכלי עבודה מבוססים מהספרות העדכנית בתחום האימון הגופני, תוך התייחסות למרכיבים פסיכולוגיים והבנה אמיתית של מה מניע מתאמנים להתמיד לאורך זמן.</p>
          </div>
        </div>
      </div>
    </section>
  )
}