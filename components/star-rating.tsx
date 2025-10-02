import React from "react";
import { Flex, Text } from '@radix-ui/themes';

type StarRatingProps = {
  rating: number
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  return (
    <Flex direction={"row"} justify="end" gap="1">
      <Text as="div" size="4" color="gray">
        {rating}
      </Text>

      <Flex>
        {
          Array
            .from({ length: 5 })
            .map((_, index) => {
              if (index < Math.floor(rating)) {
                return <svg key={index} height="24" viewBox="0 0 24 24" width="24">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    fill="#ffcf40"
                    stroke="none"
                    strokeWidth="1.5"
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                  />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
              } else if (index < rating && rating < (index + 1)) {
                const ratio = (rating - index) % 1
                const percentageFill = `${Math.floor(ratio * 100)}%`
                console.log('percentageFill', percentageFill)
                return <svg key={index} height="24" viewBox="0 0 24 24" width="24">
                  <defs>
                    <linearGradient id="grad2">
                      <stop offset="0%" stopColor="#ffcf40" />
                      <stop offset={percentageFill} stopColor="#ffcf40" />
                      <stop offset={percentageFill} stopColor="#F2F0EF" />
                      <stop offset="100%" stopColor="#F2F0EF" />
                    </linearGradient>            
                  </defs>
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    fill="url(#grad2)"
                    stroke="none"
                    strokeWidth="1.5"
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                  />
                  <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
              } else {
                return <svg key={index} height="24" viewBox="0 0 24 24" width="24">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    fill="#F2F0EF"
                    stroke="none"
                    strokeWidth="1.5"
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                  />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
              }
            })
        }
      </Flex>
    </Flex>
  )
}

export default StarRating;
