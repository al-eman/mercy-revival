import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ManifestoSection = () => {
  const [language, setLanguage] = useState<"urdu" | "english">("urdu");

  const urduManifesto = [
    "اللہ کے بندوں کو اللہ سے جوڑنا",
    "نبی رحمت صلی اللہ علیہ وسلم کی رحمۃ للعالمینی کو پوری دنیا میں عام کرنا",
    "انسانیت کی بقاء کے لیے جد وجہد کرنا ،اور انسانی بنیادوں پر روابط کو فروغ دینا",
    "امت مسلمہ کو ان کا منصب یاد دلانا ،اور انسانیت کی خدمت کے لیے تیار کرنا",
    "ملی وحدت کی پاسبانی کرنا ،اور بے شمار اختلافات کے بیچ ،اتحاد و اتفاق کے نکات اور پوانٹس پر امت کو مجتمع کرنا",
    "احکام ومسائل ، اور دین کے بے شمار شعبوں میں ان امور کی طرف توجہ دلانا جو و قت اور حالات کا تقاضا ہیں ،اور یہ بتانا کہ موجودہ وقت میں ہماری ترجیحات کیاہونی چاہیے",
    "قرآن وسنت کی روشنی میں ،بلا کسی تفریق مسلک و مشرب ،لوگوں کو درپیش مسائل کا حل بتانا ،اور ان کی دینی رہبری کرنا",
    "زندگی اور پریکٹیکل لائف سے جڑے موضوعات کو ترجیح دینا،اور اختلافات و نزاعات پیدا کرنے والے مسائل سے گریز کرنا",
    "صحت تعلیم کی بنیادوں پر ایجوکیشن کو فروغ دینا",
    "اسلام کے امن اور محبت بھرے پیغام کو ،تمام تر وسائل کے ذریعہ دنیا تک پہنچانا",
    "مصالحت اور فیملی کونسلنگ کے لیے آسان پلیٹ فام فراہم کرنا",
  ];

  const englishManifesto = [
    "To connect the servants of Allah with Allah.",
    "To spread the mercy of the Prophet ﷺ (Mercy for all the worlds) throughout the world.",
    "To strive for the preservation of humanity and promote human-based relationships.",
    "To remind the Muslim Ummah of its true mission and prepare it for serving humanity.",
    "To safeguard the unity of the Ummah and, amidst numerous differences, unite it on points of agreement and common ground.",
    "To draw attention to those religious matters and issues that are required by the time and circumstances, and to clarify what our current priorities should be.",
    "To provide solutions to people's problems and offer religious guidance in the light of the Qur'an and Sunnah, without any sectarian discrimination.",
    "To prioritize topics connected to real and practical life, and avoid issues that create division and disputes.",
    "To promote education based on sound moral and intellectual foundations.",
    "To convey Islam's peaceful and loving message to the world through all possible means.",
    "To provide an easy platform for reconciliation and family counseling.",
  ];

  return (
    <section id="manifesto" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">
              Our Manifesto
            </h2>

            {/* Language Toggle */}
            <div className="inline-flex gap-2 p-1 bg-white rounded-lg shadow-sm">
              <Button
                variant={language === "urdu" ? "default" : "ghost"}
                onClick={() => setLanguage("urdu")}
                className={language === "urdu" ? "bg-secondary" : ""}
              >
                اردو
              </Button>
              <Button
                variant={language === "english" ? "default" : "ghost"}
                onClick={() => setLanguage("english")}
                className={language === "english" ? "bg-secondary" : ""}
              >
                English
              </Button>
            </div>
          </div>

          {/* Manifesto Content */}
          <Card className="p-8 md:p-12 bg-white shadow-lg">
            <div
              className={
                (language === "urdu" ? "text-right" : "text-left") +
                (language === "urdu" ? " font-urdu urdu-sm" : "")
              }
              dir={language === "urdu" ? "rtl" : "ltr"}
              lang={language === "urdu" ? "ur" : "en"}
            >
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-secondary">
                {language === "urdu"
                  ? "ال ایمان انسٹی ٹیوٹ کا بنیادی مقصد:"
                  : "The Core Mission of Al Eman Institute:"}
              </h3>

              <ol className="space-y-5">
                {(language === "urdu" ? urduManifesto : englishManifesto).map(
                  (point, index) => (
                    <li key={index} className="flex gap-4 items-start">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center font-semibold text-xs">
                        {index + 1}
                      </span>
                      <p className="text-base md:text-lg leading-relaxed text-foreground flex-1 pt-1">
                        {point}
                      </p>
                    </li>
                  )
                )}
              </ol>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;
