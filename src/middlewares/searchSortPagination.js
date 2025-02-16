"use strict"
/* -------------------------------------------------------
    | PROJECT REMA API | NODEJS / EXPRESS |
------------------------------------------------------- */

module.exports = async (req, res, next) => {

    // - Filtering:
    // URL?filter[fieldName1]=value&filter[fieldName2]=value2
    const filter = req.query?.filter || {}

    // - Searching:
    // URL?search[fieldName1]=value&search[fieldName2]=value2
    //? https://www.mongodb.com/docs/manual/reference/operator/query/regex/
    const search = req.query?.search || {}

    for(let key in search)
        search[key] = { $regex: search[key], $option: 'i' }

    // - Sorting:
    // URL?sort[fieldName1]=asc&sort[fieldName2]=desc  (asc: A-Z  desc: Z-A)
    const sort = req.query?.sort || {}

    // - Pagination:
    // URL?page=3&limit=20
    let limit = Number(req.query?.limit) 
    limit = limit > 0 ? limit : Number(process.env?.PAGE_SIZE || 20)

    let page = Number(req.query?.page)
    page = page > 0 ? page : 1

    // URL?skip=10&limit=20
    let skip = Number(req.query?.skip)
    skip = skip > 0 ? skip : ((page -1) * limit)

    res.getModelList = async function (Model, populate = null, selectedFields = {}) {
        
        return await Model.find({...filter, ...search},selectedFields).sort(sort).skip(skip).limit(limit).populate(populate);

    };

    res.getModelListDetails = async function (Model, selectedFields = {}) {
        
        const data = await Model.find({...filter, ...search},selectedFields)

        let details = {

            filter,
            search,
            sort,
            skip,
            limit,
            page,
            pages: {
                previous: (page > 1 ? page -1 : false),
                current: page,
                next: page + 1,
                total: Math.ceil(data.length/limit)
            },
            totalRecords: data.length
        }

        details.pages.next = (details.pages.next > details.pages.total ? false : details.pages.next);
        if(details.totalRecords <= limit) details.pages = false;

        return details;

    }

    next();

}