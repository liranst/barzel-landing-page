import React from 'react'
import { openPopup } from '../utils/openPopup'

// רכיב עזר פנימי לטיפול בכפתור/קישור
function CtaButton({ href, popupUrl, cta }) {
  const label = cta || "לפרטים";

  if (popupUrl) {
    // אם זה פופאפ (פעולה), נשתמש בכפתור
    return (
      <button type="button" className="process-btn popup" onClick={() => openPopup(href)}>
        {label}
      </button>
    );
  }

  // אם זה קישור (ניווט), נשתמש בקישור
  return (
    <a 
      href={href} 
      className="process-btn" 
      target="_blank" 
      rel="noopener noreferrer"
      // הוספנו אזהרה על פתיחה בטאב חדש
      aria-label={`${label} (נפתח בטאב חדש)`}
    >
      {label}
    </a>
  );
}

function Card({ badge, title, price, period, description, cta, href, features, popupUrl }) {
  return (
    <div className="pricing-card">
      {badge && <div className="pricing-badge">{badge}</div>}
      
      {/* תיקון: הסרנו את dangerouslySetInnerHTML. 
          אנו מעבירים את התוכן כ-React Node (עם <br/>) ישירות מהרכיב הראשי */}
      <h3>{title}</h3>
      
      <div className="pricing-price">{price}</div>
      <div className="pricing-period">{period}</div>
      <p className="pricing-description">{description}</p>
      {features && features.length > 0 && (
        <ul className="pricing-features">
          {features.map((f, i) => (
            // תיקון: הסרנו את dangerouslySetInnerHTML והחלפנו בטקסט רגיל
            <li key={i}>{f}</li>
          ))}
        </ul>
      )}

      {/* שימוש ברכיב העזר החכם שיצרנו */}
      <CtaButton href={href} popupUrl={popupUrl} cta={cta} />
    </div>
  );
}

export default function Pricing() {
  return (
    // הוספה: קישור האזור לכותרת שלו
    <section id="pricing" className="pricing" aria-labelledby="pricing-title">
      <div className="container">
        <h2 id="pricing-title" className="section-title">התחל/י להתחשל</h2>
        <div className="pricing-grid">
          <Card
            badge="מומלץ לבינוניים עד מתקדמים"
            title="ליווי אונליין"
            price="₪600"
            period="/חודש"
            description="מעטפת ליווי מקצועי שלמה הנבנית סביב סדר היום, הרמה והמטרות שלך."
            cta="לתשלום"
            href="https://meshulam.co.il/purchase?b=d9b485f0f34e8286e08f91f4393a6103"
            popupUrl={true}
            features={[
              "גישה לפרופיל האישי שלך, הכולל תוכנית אימונים ותזונה המתחדשות ומתעדכנות מדי שבוע, נתונים סטטיסטיים למעקב אחר התקדמות, מדריכים, סרטוני הדרכה ומאמרים מקצועיים בלעדיים.",
              "2 סרטוני משוב אישיים בפלטפורמת Loom, שבהם אני עובר על הדיווח שלך, מנתח את ההתקדמות ואת סרטוני הטכניקה ששלחת, מצביע על נקודות לשיפור ומספק הנחיות מדויקות להמשך התהליך.",
              "זמינות מלאה תוך מתן מענה עד 24 שעות, דרך צ'אט ישיר בטלגרם.",
              "בשורה התחתונה: 2 צ'ק אינס בחודש (מפגש פרונטלי אחד אופציונלי).",
              "מתאים למתאמנים בינוניים או מתקדמים שמחפשים להגיע לרמה הבאה."
            ]}
          />

          <Card
            badge="מומלץ למתחילים"
            // תיקון: העברת התוכן כ-React Node כדי לאפשר <br/> בטוח
            title={<>היברידי<br />(פרונטלי + אונליין)</>}
            price="₪1,200"
            period="/חודש"
            description="שילוב בין אימונים פרונטליים לליווי אונליין"
            cta="בדוק זמינות"
            popupUrl={false}
            href="https://wa.me/972546222479"
            features={[
              "4 אימונים אישיים בחודש (אחד בשבוע).",
              "כל מה שכלול בליווי אונליין (ראה/י כרטיסייה).",
              "מתאים למתאמנים מתחילים שרוצים להתקדם לעצמאות בחדר הכושר."
            ]}
          />

          <Card
            badge="מומלץ למתחרים"
            title="ליווי תחרותי"
            price="₪750"
            period="/חודש"
            description="הכנה תחרותית למתחרים ומתחרות בפיתוח גוף טבעי."
            cta="לתשלום"
            popupUrl={true}
            href="https://meshulam.co.il/purchase?b=82836475497332ac97e2c9ba8b581a9b"
            features={[
              "תכנון שנתי מלא (Off Season + Pre Prep + Prep).",
              "גישה לפרופיל האישי שלך, הכולל תוכנית אימונים ותזונה המתחדשות ומתעדכנות מדי שבוע, נתונים סטטיסטיים למעקב אחר התקדמות, מדריכים, סרטוני הדרכה ומאמרים מקצועיים בלעדיים.",
              "קבלת פרוטוקול פוזינג והדרכה לקטגוריות בילדינג וקלאסיק בצ'ק אינס השבועיים.",
              "פרוטוקול Back/Front/Mid/Linear Load לשבוע ה - Peak Week, הכולל מניפולציות נוזלים, אשלגן ונתרן להשגת המראה הנדרש ביום הבמה.",
              "בשורה התחתונה: 4 צ'ק אינס בחודש (מפגש פרונטלי אחד אופציונלי)."
            ]}
          />

          <Card
            title="אימונים פרונטליים / זוגיים"
            price="₪250"
            period="לאימון"
            description="אימוני כח וטכניקה בסטודי פרטי בהוד השרון. התחייבות ל־4 או 8 אימונים בחודש."
            cta="תאם אימון"
            popupUrl={false}
            href="https://wa.me/972546222479"
            features={[
              "יחס אישי 1 על 1 או זוגי.",
              "הקניית מיומנות טכנית ראשונית בתרגילי הבסיס כגון: סקוואט, בנץ', דדליפט.",
              "לאחר בניית בסיס טכני, בניית עצימות והתקדמות בתוכנית אימון ייעודית לסטודיו.",
              "נקודת הזינוק הראשונית למתאמני כח מתחילים."
            ]}
          />
        </div>
        <p className="pricing-note">*כל המחירים כוללים מע"מ. מספר המקומות בכל מסלול מוגבל.*</p>
      </div>
    </section>
  )
}