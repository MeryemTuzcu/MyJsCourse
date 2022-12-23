class JokeApi{
    constructor(){
        this.baseURL = 'https://api.chucknorris.io';
        this.axiosNesne = axios.create({ //jokeapiden bir nesne üreticem ve axiosNesneye aktarıcam
            baseURL: this.baseURL,
        });
    }

    async randomSakaGetir(){
        try{
            const sakaResponse = await this.axiosNesne.get('/jokes/random');
            console.log(sakaResponse.data.value);
            return sakaResponse.data.value;
        }catch(hata){
            console.log(hata.response);
        }
    }
}
//closure örneğine benzer bir mantık
export default function sakaGetir(){
    const getirilenSaka = new JokeApi().randomSakaGetir();
    return getirilenSaka;
}