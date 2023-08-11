import { ReactNode, MouseEventHandler } from 'react';

// button props
export type TButtonProps = {
    children: ReactNode | string;
    type?: "button" | "submit";
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

// feature card props
export type TFeaturedCardProps = {
    feature_title: string;
    feature_description: string;
    iconSrc: string;
}

// service card props
export type TServiceCardProps = {
    service_title: string;
    description: string;
    iconSrc: string;
}

// works thumbnail props
export type TWorksThumbnailProps = {
    imgSrc: string;
}

// pricing props
export type TPricingProps = {
    plan_name: string,
    description: string,
    price: string,
    features: string[];
    index: number;
}

// types for spotlight
export type TSpotlightProps = {
    clientX: number;
    clientY: number;
    currentTarget: HTMLElement;
};

// why us list props
export type TWhyUsListProps = {
    title: string;
    description: string;
    index: number;
}

// reviewCard porops 
export type TReviewCardProps = {
    id: number;
    reviewer_name: string;
    reviewer_title: string;
    reviewer_picture: string;
    review_text: string;
}