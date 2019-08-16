### <div dir="rtl">اضافة لغات لتطبيق ionic 4</div>

### <div dir="rtl">قم باستيراد المشروع وتنفيذ هذه الاوامر</div>

```
npm i @ngx-translate/core @ngx-translate/http-loader
npm i @ionic/storage
```

### <div dir="rtl">لاضافة لغة جديده افتح الملف التالي</div>

*app/services/language.service.ts*

### <div dir="rtl">وتستطيع اضافة او حذف لغة من خلال السطر التالي</div>

```
{ text: 'xxx', value: 'zz', img: 'assets/imgs/yy.png' },
```

### <div dir="rtl">xxx اسم اللغة</div>

### <div dir="rtl">zz رمز اللغة وايضاً اسم الملف الخاص باللغة في مجلد i18n</div>

### <div dir="rtl">yy اسم الصورة في مجلد الصور</div>

### <div dir="rtl">ملفات اللغات في المجلد assets/i18n/xx.json</div>

### <div dir="rtl">يمكنك انشاء ملفات بصيغة json لكل لغة داخل مجلد i18n</div>

### <div dir="rtl">ملف اللغة يكون بهذا الشكل</div>

```
{
    "title-app":"اسم التطبيق",
    "change-language":"تغيير اللغة",
    "welcome":"اهلا وسهلا بكم"
}
```

### <div dir="rtl">العمود الايسر المسميات الثابته في جميع الملفات الخاصة باللغة ويكون باللغة الانجليزية والعمود الايمن المسميات المتغيرة حسب اللغة</div>



### <div dir="rtl">لمشاهدة المشروع على المتصفح والجوال نفذ الامر</div>

```
ionic serve --devapp
```

### <div dir="rtl">لمشاهدة المشروع على الجوال ثبت تطبيق ionic DevApp</div>


*By: Faisal Almatrafi*

*info@ftm.sa*
