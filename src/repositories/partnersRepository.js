import client, {baseDomain} from "./repository";

class PartnersRepository {
    getPartnersList(){
        const endPoint = 'parnters'

        const partnersList = client.get(baseDomain + endPoint)
            .then(res => {
                return res.data
            })
            .catch(err => {
                return err
            })

        return partnersList
    }

    getSinglePartner(id){
        const endPoint = 'parnters/' + id

        const singlePartnerInfo = client.get(baseDomain + endPoint)
            .then(res => {
                return res.data
            }) 
            .catch(err => {
                return err
            })
        
        return singlePartnerInfo
    }

    deleteSinglePartner(id){}
}

export default new PartnersRepository()
