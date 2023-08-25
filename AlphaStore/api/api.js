import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'

export default function api() {
    const [data, setData] = useState([]);
    const fetchData= async () => {
        const url = 'https://aliexpress-datahub.p.rapidapi.com/item_detail?itemId=3256804591426248';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'b4f065aff9msh876e32be1427ee7p119befjsnd220b8197285',
                'X-RapidAPI-Host': 'aliexpress-datahub.p.rapidapi.com'
            }
        };
        try {
            const response = await fetch(url, options);
            const result = await response.text();
            console.log(result);
            setData(result);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchData();
    }, [data])

    return (
        <View>
            <Text>api</Text>
        </View>
    )
}