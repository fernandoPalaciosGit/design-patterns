package main.patterns.layer;

import java.time.LocalDate;

public class DistributorCar extends LayerCar implements LayerInterfaceCar {
    private LocalDate registrationDate;
    private String registrationNumber;
    private int mileage;
    private FabricCar fabric;

    public DistributorCar(LocalDate registrationDate, String registrationNumber, int mileage) {
        super("----- Distribution Car ------");
        this.registrationDate = registrationDate;
        this.registrationNumber = registrationNumber;
        this.mileage = mileage;
    }

    @Override
    public void printCarAssets() {
        super.printCarAssets();
        System.out.println("registrationDate: " + this.registrationDate);
        System.out.println("registrationNumber: " + this.registrationNumber);
        System.out.println("mileage: " + this.mileage);
        fabric.printCarAssets();
    }

    @Override
    public void setLowerLayer(LayerCar layer) {
        this.fabric = (FabricCar) layer;
    }
}
