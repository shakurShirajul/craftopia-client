import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SubCatgoryCard from "../SubCatogryCard/SubCatgoryCard";
import { Helmet } from "react-helmet-async";

const SubcategoryAllCard = () => {
    const [datas, setDatas] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/subcategory/items`)
            .then(res => res.json())
            .then(data => setDatas(data))
    }, [])

    const filterData = datas.filter(data => data.subcategory_Name === id);

    console.log(datas);
    return (
        <div>
            <Helmet>
                <title>Subcategory | Craftopia</title>
            </Helmet>
            <div className="flex justify-center">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        filterData.map(data =>
                            <SubCatgoryCard data={data} />
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default SubcategoryAllCard;