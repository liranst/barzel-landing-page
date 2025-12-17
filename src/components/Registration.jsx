import React, { useState } from 'react'
import { openPopup } from '../utils/openPopup'

export default function Registration(){
  const [open, setOpen] = useState({ 1: false, 2: false, 3: false, 4: false })

  const steps = [
    {
      id: 1,
      title: 'קובעים שיחת התאמה בזום',
      body: (
        <>
          <p>עורכים היכרות ראשונית, מאפיינים יעד, ניסיון קודם ובודקים התאמה.</p>
          <div className="actions">
            {/* תיקון: הפיכת <a> ל-<button> */}
            {/* אלמנט שמבצע פעולה (פתיחת פופאפ) ולא ניווט, חייב להיות <button> */}
            <button 
              className="btn-metal popup" 
              onClick={e => {openPopup('https://calendly.com/barzelonlinecoaching/coaching-call')}}
            >
              קביעת שיחה
            </button>
            
            {/* תיקון: הוספת התראה על פתיחה בלשונית חדשה */}
            <a 
              href="https://forms.gle/gwEwstUVmLswdx1p7" 
              className="btn-ghost" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="טופס התאמה (נפתח בלשונית חדשה)"
            >
              טופס התאמה
            </a>
          </div>
        </>
      )
    },
    // ... (שאר הצעדים נשארים זהים בתוכן שלהם)
    {
      id: 2,
      title: 'מנסחים מטרות ובוחרים מסלול',
      body: (<p>מנסחים מטרות ומגדירים טיימליין להשגתן, ולפיהן בוחרים את מסלול הליווי המתאים ביותר.</p>)
    },
    {
      id: 3,
      title: 'תשלום באתר ומילוי שאלון מקדים',
      body: (
        <>
          <p>לאחר שיחת ההתאמה, ממלאים הסכם התקשרות ומסדירים תשלום על הליווי.</p>
          <p className="step-desc--new"></p>
          <div className="actions">
            <a href="#pricing" className="btn-metal">תשלום</a>
          </div>
        </>
      )
    },
    {
      id: 4,
      title: 'קבלת פרוטוקול והתחלת ליווי',
      body: (<p>קבלת פרוטוקול והתחלת ליווי 
מקבלים פרוטוקול התחלה ויוצאים לדרך!</p>)
    }
  ]

  const toggle = (id) => {
    setOpen(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    // המבנה <section> ו-<h2> כבר היה תקין - מעולה!
    <section id="apply-steps" aria-labelledby="steps-title" style={{ padding: '80px 0', background: 'var(--steel-gray)' }}>
      <div className="steps-wrap container">
        <h2 id="steps-title" className="section-title">איך מצטרפים?</h2>

        {steps.map(step => (
          <div className="step" key={step.id}>
            <article
              className="step-card--new"
              // הסרה: role="region" ו-aria-labelledby מיותרים כאן
              // הפאנל הפנימי (step-body) יקבל אותם
              style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}
            >
              <div className="step-badge--new" style={{ flex: '0 0 auto', marginTop: 4 }}>
                <div className="badge-num--new">{step.id}</div>
              </div>
              <div className="step-content--new" style={{ flex: '1 1 auto' }}>
                <div className="step-head" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                  <h3 id={`s${step.id}t`} className="step-title--new">{step.title}</h3>
                  <button
                    className="step-toggle"
                    aria-expanded={!!open[step.id]}
                    aria-controls={`s${step.id}b`}
                    // תיקון: החלפת 'title' ב-aria-label מדויק
                    // שמכריז על המצב (פתוח/סגור) ועל שם הכפתור
                    aria-label={`${open[step.id] ? 'סגור' : 'פתח'} פרטים עבור: ${step.title}`}
                    onClick={() => toggle(step.id)}
                  >
                    {/* הוספה: aria-hidden להסתרת התוכן הויזואלי מקוראי מסך (הם מקבלים את ה-aria-label) */}
                    {/* תמיד מציגים '+' ומסתמכים על האנימציה (סיבוב) להצגתו כ'✕' כשהוא פתוח */}
                    <span className="step-icon" aria-hidden="true">+</span>
                  </button>
                </div>
                <div 
                  id={`s${step.id}b`} 
                  className="step-body" 
                  // הוספה: role="region" ו-aria-labelledby הופכים את הפאנל 
                  // לאזור נגיש המקושר לכותרת (h3) שלו
                  role="region"
                  aria-labelledby={`s${step.id}t`}
                  // תיקון: החלפת style ב-'hidden' סמנטי
                  hidden={!open[step.id]}
                >
                  {step.body}
                </div>
              </div>
            </article>
          </div>
        ))}

      </div>
    </section>
  )
}