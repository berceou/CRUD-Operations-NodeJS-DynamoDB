const axios = require('axios')

exports.fetch = async() => {
    const response = await axios.get('https://api.trendyol.com/sapigw/brands');
    
    return response.data;
}

//categories:
exports.fetchCategories = async(req,res) => {
    const response = await axios.get('https://api.trendyol.com/sapigw/product-categories');    
    return response.data;
}

exports.fetchSingleCategory = async (categoryId) => {
    try{
        const response = await axios.get(`https://api.trendyol.com/sapigw/product-categories/${categoryId}/attributes`);
        return {
            status: true,
            data: response.data
        }
    }catch{
        return {
            status: false,
            message: 'Böyle bir data mevcut değil!'
        }
    }
} //duruma göre bunu controllerda da yapabilirsin ama modal daha mantıklı data analizi olduğu için
