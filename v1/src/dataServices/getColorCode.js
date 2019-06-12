import axios from 'axios';

const baseUrl = "https://raw.githubusercontent.com/karthik-padav/ui-palettes/master/data/"

export const getMaterialDesignColors = () => {
    return new Promise((resolve, reject) => {
        axios.get(baseUrl + `MaterialDesignColors.json`)
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                resolve(err);
            })
    })
}

export const getFlatUiColors = () => {
    return new Promise((resolve, reject) => {
        axios.get(baseUrl + 'FlatUIColors.json')
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                resolve(err);
            })
    })
}

export const getSocialColors = () => {
    return new Promise((resolve, reject) => {
        axios.get(baseUrl + 'SocialMediaColors.json')
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                resolve(err);
            })
    })
}

export const getMetroColors = () => {
    return new Promise((resolve, reject) => {
        axios.get(baseUrl + 'MetroColors.json')
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                resolve(err);
            })
    })
}

export const getFamousColors = () => {
    return new Promise((resolve, reject) => {
        axios.get(baseUrl + 'FamousColors.json')
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                resolve(err);
            })
    })
}

export const getColorCombination = () => {
    return new Promise((resolve, reject) => {
        axios.get(baseUrl + 'ColorCombination.json')
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                resolve(err);
            })
    })
}