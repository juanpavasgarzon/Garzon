import { cn } from "@/lib/utils"
import * as React from "react"
import { Helmet } from "react-helmet"

type PageProps = {
    title: string;
} & React.PropsWithChildren<React.HtmlHTMLAttributes<HTMLDivElement>>

const Page = React.forwardRef<
    HTMLDivElement,
    PageProps
>(({ className, title, children, ...props }, ref) => (
    <React.Fragment>
        <Helmet>
            <title>{title}</title>
        </Helmet>
        <div className="m-1" />
        <div className={cn("h-full w-full", className)} ref={ref} {...props}>
            {children}
        </div>
    </React.Fragment>
))
Page.displayName = "Page"

export { Page }
