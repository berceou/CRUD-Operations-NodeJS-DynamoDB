const brandService = require("../services/brand")

exports.fetchBrand = async (req,res) => {
    const response = await brandService.fetch();
    res.send({
        status: true,
        data: response.brands //datayı döndürdüğüm için serviste, datayı almış oldum.
    }) 
    //frontende marka vermiş olduk
}
exports.fetchCategories = async (req,res) => {
    const response = await brandService.fetchCategories();
    res.send({
        status: true,
        data: response.categories
    })
}

exports.fetchSingleCategory = async (req,res) => {
/* data var mı yok mu kontrol etmiyoruz:
const response = await brandService.fetchSingleCategory(req.params.id);
    res.send({
        status: true,
        data: response // .categories sildim çünkü bana categories içinde bir obje döndürmüyor.
    })
} */
    const response = await brandService.fetchSingleCategory(req.params.id);
    res.send(response)
} //bu işlemin data var mı kontrolü modal(services) kısmında.
