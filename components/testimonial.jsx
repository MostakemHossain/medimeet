import React from 'react'
import { Badge } from './ui/badge'
import { testimonials } from '@/lib/data'
import { Card, CardContent, CardHeader } from './ui/card'

const Testimonial = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="px-4 container mx-auto">
        <div className="text-center mb-16">
        <Badge
            className={
              "bg-emerald-900/39 border-emerald-700/30 px-4 py-2 text-sm font-medium mb-4 "
            }
            variant={"outline"}
          >
            Success Stories
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Users Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear from our users about how MediMeet has transformed their healthcare experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {
            testimonials.map((testimonial, index) => {
              return (
                <Card key={index} className={"border-emerald-900/20 duration-300 transition-all border:bg-emerald-800/40"}>
                  
                  <CardContent className={"pt-6"}>
                <div className='flex items-center mb-4'>
                    <div className='w-12 h-12 rounded-full bg-emerald-900/20 flex items-center justify-center mr-4'>
                        <span className='text-emerald-400 font-bold'>{testimonial.initials}</span>
                    </div>
                    <div>
                        <h4 className='font-semibold text-white'>{testimonial.name}</h4>
                        <p className='text-sm text-muted-foreground'>{testimonial.role}</p>
                    </div>
                </div>
                <p className='text-muted-foreground'>
                &quot;{testimonial.quote}&quot;
                </p>
                  </CardContent>
                </Card>
              )
            })
          }
        </div>
      </div>

      </section>
  )
}

export default Testimonial