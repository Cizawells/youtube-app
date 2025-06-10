import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { Avatar, AvatarImage } from "./ui/avatar";
<<<<<<< HEAD
=======
import { cn } from "@/lib/utils";
>>>>>>> 816243d10774fc60d2238f0ffabb310c4c6d57c7

const avatarVariants = cva("", {
  variants: {
    size: {
      default: "h-9 w-9",
      xs: "h-4 w-4",
      sm: "h-6 w-6",
      lg: "h-10 w-10",
      xl: "h-[160px] w-[160px]",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface UserAvatarProps extends VariantProps<typeof avatarVariants> {
  imageUrl: string;
  name: string;
  className?: string;
  onClick?: () => void;
}

<<<<<<< HEAD
const UserAvatar = ({
  size,
  imageUrl,
  name,
  className,
  onClick,
}: UserAvatarProps) => {
  return (
    <Avatar
      className={cn(avatarVariants({ size, className }))}
      onClick={onClick}
    >
      <AvatarImage src={imageUrl} alt={name} />
    </Avatar>
  );
};
=======
// const UserAvatar = ({
//     imageUrl,
//     name,
//     size,
//     className?,
//     onClick
//   }: UserAvatarProps
// ) => {
//   return <Avatar>
//     <AvatarImage src={imageUrl} alt={name}/>
//   </Avatar>;
// };
const UserAvatar = ({
imageUrl,
name,
size,
className
}: UserAvatarProps) => {
  return (
<Avatar className={cn(avatarVariants({ size, className}))}>
  <AvatarImage src={imageUrl} alt={name}/>
</Avatar>
  )
}
>>>>>>> 816243d10774fc60d2238f0ffabb310c4c6d57c7

export default UserAvatar;
