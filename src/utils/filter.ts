import Person from '../interface/Person';

export default function (list: Person[], value: string, field: string): any[] {

    if (!field) {
        return list;
    }
    const filteredList = list.filter((data: any) => {
        if (value.startsWith('"') && value.endsWith('"')) {
            return data[field]?.toLowerCase().indexOf(value.substr(1, value.length - 2).toLowerCase()) !== -1;
        } else {
            let allKeywords = value.toLowerCase().split(" ");
            for (let i = 0; i < allKeywords.length; i++) {
                if (data[field]?.toLowerCase().indexOf(allKeywords[i]) !== -1) {
                    return true;
                }
            }
            return false;
        }
    });

    return filteredList;
}