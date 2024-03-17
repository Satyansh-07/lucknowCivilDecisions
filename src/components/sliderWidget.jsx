import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function CarouselSize() {
    //dummy data; need to be removed ASA api is integrated
    let popularSearches = ['Robbery', 'Section IPC 146', 'Section IPC 153', 'Section IPC 171', 'Section IPC 302', 'Section IPC 307', 'CPC Section 258', 'CPC Section 327'];
    return (
        <Carousel opts={{align: "start", }} className="w-full">
            <CarouselContent>
                {popularSearches.map((kwd, index) => (
                <CarouselItem key={index} className="md:basis-1/4 lg:basis-1/6 sm:basis-[45%]">
                    <div className="p-1">
                    <Card className="rounded-full cursor-pointer border-0 bg-capsuleBgColor hover:bg-capsuleHoverColor">
                        <CardContent className="flex items-center justify-center p-2">
                            <span className="text-sm sm:text-xs">{kwd}</span>
                        </CardContent>
                    </Card>
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        </Carousel>
    )
}
