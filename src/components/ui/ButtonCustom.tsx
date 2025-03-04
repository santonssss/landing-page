import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "src/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef, ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        accent: "bg-accent text-accent-foreground hover:bg-accent/90",
        glass: "glass glass-dark hover:bg-background/80",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onDrag">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  animate?: boolean;
}

// Create a separate type for motion button to avoid conflicts
type MotionButtonProps = Omit<
  HTMLMotionProps<"button">,
  "className" | "children" | "onClick"
> & {
  className?: string;
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  children?: React.ReactNode;
};

const ButtonCustom = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, animate = true, ...props }, ref) => {
    const buttonClassName = cn(buttonVariants({ variant, size, className }));

    if (animate) {
      // Use type assertion to safely pass props to motion.button
      const motionProps: MotionButtonProps = {
        whileHover: { scale: 1.02 },
        whileTap: { scale: 0.98 },
      };

      return (
        <motion.button
          className={buttonClassName}
          ref={ref}
          {...motionProps}
          onClick={props.onClick}
          type={props.type}
          disabled={props.disabled}
          form={props.form}
          name={props.name}
          value={props.value}
          id={props.id}
          aria-label={props["aria-label"]}
        >
          {props.children}
        </motion.button>
      );
    }

    return <button className={buttonClassName} ref={ref} {...props} />;
  }
);
ButtonCustom.displayName = "ButtonCustom";

export { ButtonCustom, buttonVariants };
