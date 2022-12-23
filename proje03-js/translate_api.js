class TranslateApi{
    constructor(ingilizceSaka){
        this.baseURL = 'https://translation.googleapis.com/';
        this.aranacakCumle = ingilizceSaka;
        this.axiosNesnesi = axios.create({
            baseURL: this.baseURL,
            params:{
                target : 'tr',
                key: 'AIzaSyCLqw1Dy_kqHv4hyRFEnzJ38ju3MVuO6dU',
                q:this.aranacakCumle

            }
        });
    }

    async ceviriYap(){
        try{
            const ceviri = await this.axiosNesnesi.get('language/translate/v2');
            console.log(ceviri.data.data.translations[0].translatedText);
            return ceviri.data.data.translations[0].translatedText;

        }catch(err){
            console.log(err.response.data.error.message);
        }
    }
} 

export default function ceviriYap(ceviriYapilacakMetin){
    const ceviri = new TranslateApi(ceviriYapilacakMetin).ceviriYap();
    return ceviri;
}