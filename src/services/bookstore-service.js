export default class BookstoreService{

    data = [
            {
                id: 1,
                title: 'Production-Ready Microservices',
                author: 'Susan J. Fowler',
                price: 32,
                coverImage: 'https://covers.oreillystatic.com/images/0636920053675/lrg.jpg' },
            {
                id: 2,
                title: 'Release It',
                author: 'Michael T. Nygard',
                price: 45,
                coverImage: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg' }

        ];

    getBooks(){
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                if (Math.random() > 0.75){
                    reject (new Error('Somesing bad happened'))
                }
                resolve(this.data)               
            }, 1500);
        });
    }
}