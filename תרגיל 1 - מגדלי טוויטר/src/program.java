import java.util.Scanner;

public class program {
    public static void main(String[] args) {
        Scanner in=new Scanner(System.in);
        System.out.println("choose an option: \n1.Rectangle tower\n2.Triangle tower\n3.Exit  ");
        int option= in.nextInt(),option2;
        int height, width, num;
        double widthRectangle;
        boolean first=false;
        String row;
        while(option!=3){
            System.out.println("enter height");
            height= in.nextInt();
            while (height<2){
                System.out.println("enter height");
                height= in.nextInt();
            }
            System.out.println("enter width");
            width= in.nextInt();
            if (option==1){
                if(height==width||Math.abs(width-height)>5)
                    System.out.println("The area of the rectangle is: "+height*width);
                else
                    System.out.println("The perimeter of the rectangle is: "+(height*2+width*2));
            }
            else {
                System.out.println("choose an option: \n1.Calculate the perimeter of the triangle\n2.Print the triangle");
                option2= in.nextInt();
                if(option2==1){
                    widthRectangle=width;
                    System.out.println(Math.sqrt(Math.pow(widthRectangle/2, 2) + Math.pow(height, 2)));
                }
                else {
                    if(width%2==0||width>height*2)
                        System.out.println("cannot print this triangle");
                    else{
                        System.out.println(" ".repeat(width/2)+"*");
                        num=width/2-1;
                        first=true;
                            for (int i = 3; i < width; i+=2) {
                                for (int k = 0; k < num ; k++) {
                                    row=" ".repeat((width-i)/2)+"*".repeat(i);
                                    if(first){
                                        first=false;
                                        System.out.println(row);
                                    }
                                    System.out.println(row);
                                }
                            }

                        for (int i = 0; i <width ; i++) {
                            System.out.print("*");
                        }
                        System.out.println();
                    }
                }
            }
            System.out.println("choose an option: \n1.Rectangle tower\n2.Triangle tower\n3.Quit  ");
            option= in.nextInt();
        }
        System.out.println("You have successfully exited");
    }
}
