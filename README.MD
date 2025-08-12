# Restaurant Management App 🍽️

## הקדמה

פרויקט זה נמצא **בשלבי פיתוח** ונבנה במטרה לספק פתרון דיגיטלי לניהול מסעדות ובתי קפה, המשלב ממשק ידידותי למנהלים ולעובדים יחד עם מערכת ניהול נתונים מתקדמת.  
האפליקציה מתמקדת בניהול עובדים, תפריטים, מלאי וסחורה, ומאפשרת ביצוע פעולות בזמן אמת בצורה נוחה מכל מכשיר נייד.

## תיאור הפרויקט

האפליקציה כוללת שני חלקים עיקריים:

1. **צד לקוח (Client)** – אפליקציית מובייל ב־React Native המאפשרת למנהלים ולעובדים לבצע פעולות שונות, כולל הרשמה, התחברות, והצגת מידע חיוני.
2. **צד שרת (Server)** – שרת Node.js עם Express.js האחראי על ניהול הנתונים במסד הנתונים MongoDB, טיפול באימות משתמשים, ואבטחת המידע.

הפרויקט בנוי בצד הלקוח באמצעות **React Native**, **React Navigation**, **Styled Components / Emotion Native**, **Axios** ו־**Expo**.  
בצד השרת נעשה שימוש ב־**Node.js** עם **Express.js**, **MongoDB (Mongoose)**, **Joi** לוולידציה, **JWT** לאימות משתמשים, **bcrypt** להצפנת סיסמאות, וכן **CORS**, **dotenv**, **morgan** ועוד ספריות עזר.

---

## 📥 התקנה והרצה מקומית

```bash
# 1. שכפול הפרויקט למחשב
git clone https://github.com/furchan1997/React-Nativ---Restaurant-management.git
cd React-Nativ---Restaurant-management

# 2. התקנת צד הלקוח (Client - React Native App)
cd client
npm install
npx expo start
# לאחר הרצת npx expo start:
# - ניתן לפתוח את האפליקציה באמולטור אנדרואיד/iOS
# - או במכשיר פיזי עם אפליקציית Expo Go (סרוק את ה-QR Code שמופיע במסוף)

# 3. התקנת צד השרת (Server - Node.js Backend)
cd server
npm install

# 4. יצירת קובץ .env עם המשתנים הבאים:
#   PORT=5000
#   MONGO_URI=כתובת-חיבור-ל-MongoDB (ניתן להשתמש ב-MongoDB Atlas)
#   JWT_SECRET=סיסמה-סודית-ל-JWT (כל מחרוזת אקראית חזקה)
# דוגמה:
echo "PORT=5000" >> .env
echo "MONGO_URI=your-mongo-uri" >> .env
echo "JWT_SECRET=your-secret" >> .env

# 5. הרצת השרת
npm start
# ברירת מחדל: השרת ירוץ על http://localhost:5000
# ודא שפורט 5000 פנוי ולא בשימוש ע"י תוכנה אחרת

# - התקנת Node.js עם גרסת npm עדכנית
# - התקנת Expo CLI עבור צד הלקוח (npm install -g expo-cli)
# - חיבור תקין ל-MongoDB (מקומי או בענן עם Atlas)

# בעיה: Error: Cannot find module '...'
# פתרון: ודא שאתה בתיקייה הנכונה והרץ npm install שוב.

# בעיה: האפליקציה לא מצליחה להתחבר לשרת
# פתרון: ודא שהשרת רץ ושכתובת ה-URL בלקוח נכונה.

# בעיה: פורט תפוס
# פתרון: שנה את ערך PORT בקובץ .env או סגור תוכנה שמשתמשת בפורט הזה.
```
