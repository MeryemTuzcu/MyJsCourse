class UnsplashApi {
    constructor() {

        this.baseURL = 'https://api.unsplash.com';
        this.clintID = 'Client-ID 6ceBkhtgaKAJn0upAxgr1BcTmHELnh0UUPICyNGSf9c';
        this.axiosNesne = axios.create({ //jokeapiden bir nesne üreticem ve axiosNesneye aktarıcam
            baseURL: this.baseURL,
            headers: {
                Authorization: this.clintID
           
            },
            params: {
                query: 'animal',
                count: 1 
                // ben dökümanımı okuyarak hayvanların görsellerini ve döndürülecek foto sayısını
                // count ile yazdım fakat count bana dizi gönderdiği için aşağıda array yapısıyla resmi çağırdım
            }

        });
    }



    
    

    async randomResimGetir() {
        try {
            const resimResponse = await this.axiosNesne.get('/photos/random');
            console.log(resimResponse.data[0].urls.regular);
            return resimResponse.data[0].urls.regular;
        } catch (err) {
            console.log(err);
            return 'https://www.online-tech-tips.com/wp-content/uploads/2021/06/http-403.jpeg';
        }
    }
}



export default function resimGetir(){
    const getirilenResim = new UnsplashApi().randomResimGetir();
    return getirilenResim;
}

