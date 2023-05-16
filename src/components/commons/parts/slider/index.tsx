import SliderComponent from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from '@emotion/styled';
import { Image } from 'antd';
import { Fragment } from 'react';
import { fallback } from '../../../../commons/libraries/fallback';

const Wrapper = styled(SliderComponent)`
    .slick-list {
        height: 680px;
    }
    .slick-arrow{
        z-index: 999;
        width: 48px;
        height: 48px;
    }
    .slick-prev:before, .slick-next:before{
        content: "";
        display: block;
        width: 48px;
        height: 48px;
        background-color: #fff;
        border-radius: 50%;
    }
    .slick-prev{
        left: 5%;
    }
    .slick-prev:before{
        background-image: url("/prev.png");
        background-repeat: no-repeat;
        background-position: center;
    }
    .slick-next{
        right: 5%;
    }
    .slick-next:before{
        background-image: url("/next.png");
        background-repeat: no-repeat;
        background-position: center;
    }
    // 캐러셀 도트
    .slick-dots{
        bottom: 25px;
    }
    .slick-dots li button:before{
        color: #fff;      
    }
    .slick-dots li.slick-active button:before{
        color: #fff;
        opacity: 1;
    }

`

export default function Slider (props) {
    const settings = {
        arrows: true,
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
	};
    return (
        // (props.data?.fetchUseditem?.images[0] === undefined 
        //     ? (
        //         <Image fallback={fallback} width={480} height={480} preview={false}/>
        //     )
        //     : (
                <Wrapper {...settings}>
                    {[1, 1, 1].map((el) => (
                        <Fragment key={el}>
                            <Image
                                src={`https://storage.googleapis.com/${el}`}
                                alt=""
                                fallback={fallback}
                                width={680}
                                height={680}
                            />
                        </Fragment>
                    ))}
                </Wrapper>
            )
    //     )
    // )
}