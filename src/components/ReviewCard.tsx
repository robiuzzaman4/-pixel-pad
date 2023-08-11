import { TReviewCardProps } from "@/types/types";
import Image from "next/image";

const ReviewCard = ({ id, reviewer_name, reviewer_title, reviewer_picture, review_text }: TReviewCardProps) => {
    return (
        <div className="bg-slate-900 p-8 grid gap-4 rounded-xl mx-10 w-96 h-64">
            <div className="flex items-center justify-between gap-4">
                <Image
                    src={reviewer_picture}
                    alt="Reviewer Picture"
                    height={40}
                    width={40}
                    className="object-cover rounded-full" />
                <div className="flex flex-col items-start">
                    <h5 className="font-bold">
                        {reviewer_name}
                    </h5>
                    <p className="text-slate-400 text-sm">
                        {reviewer_title}
                    </p>
                </div>
            </div>
            <div className="text-sm text-slate-400">
                {review_text}
            </div>
        </div>
    );
};

export default ReviewCard;