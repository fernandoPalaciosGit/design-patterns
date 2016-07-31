package main.patterns.layer;

public class Car extends LayerCar implements LayerInterfaceCar {
    private String owner;
    private int finalSale;
    private DistributorCar distributor;

    public Car(String owner, int finalSale) {
        super("----- Creation Car ------");
        this.owner = owner;
        this.finalSale = finalSale;
    }

    @Override
    public void printCarAssets() {
        super.printCarAssets();
        System.out.println("owner : " + this.owner);
        System.out.println("finalSale : " + this.finalSale);
        distributor.printCarAssets();
    }

    @Override
    public void setLowerLayer(LayerCar layer) {
        this.distributor = (DistributorCar) layer;
    }
}
