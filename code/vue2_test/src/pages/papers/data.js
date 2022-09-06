export function obj() {
    return {
        avgCountryGdp: 0,
        avgGdp: 0,
        avgProvinceGdp: 0,
        cityID: 0,
        countryGdp: 0,
        countryGdpIncrease: 0,
        gdp: 0,
        gdpIncrease: 0,
        id: 0,
        provinceGdp: 0,
        provinceGdpIncrease: 0,
        year: 0,
    }
}

// 从数组中，找出值为value的下标
export function findIdx(arr, value) {
    let idx = -1;
    for (let v of arr) {
        idx++;
        if (v.id === value) {
            return idx;
        }
    }
}