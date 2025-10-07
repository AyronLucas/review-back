class ServiceTemperatura {
    
    ConvertCelToFah(cel) {
        if(isNaN(cel)){
            throw new Error("Informe somente números")
        }
        return (cel * 9 / 5) + 32
    }

    ConvertFahToCel() {}
}

export default new ServiceTemperatura()