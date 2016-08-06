package main.patterns.layer;

public class FabricCar extends LayerCar {
    private byte wheels;
    private String colour;
    private byte doors;

    public FabricCar(byte wheels, String colour, byte doors) {
        super("----- Fabrication Car ------");
        this.wheels = wheels;
        this.colour = colour;
        this.doors = doors;
    }

    @Override
    public void printCarAssets() {
        super.printCarAssets();
        System.out.println("wheels: " + this.wheels);
        System.out.println("colour: " + this.colour);
        System.out.println("doors: " + this.doors);
    }
}
