import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SubCatgoryCard from "../SubCatogryCard/SubCatgoryCard";
import { Helmet } from "react-helmet-async";

const SubcategoryAllCard = () => {
    const [datas, setDatas] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://craftopia-server-ruddy.vercel.app/subcategory/items`)
            .then(res => res.json())
            .then(data => {
                setDatas(data)
                setLoading(false)
            })

    }, [])

    const filterData = datas.filter(data => data.subcategory_Name === id);

    return (

        <div>
            <Helmet>
                <title>Subcategory | Craftopia</title>
            </Helmet>
            {
                loading ? (
                    <div className="text-center my-10">
                        <span className="loading loading-infinity loading-lg"></span>
                    </div>
                ) :
                    (
                        <div className="flex justify-center">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                                {
                                    filterData.map(data =>
                                        <SubCatgoryCard data={data} />
                                    )
                                }
                            </div>
                        </div>
                    )
            }
        </div>
    );
};

export default SubcategoryAllCard;