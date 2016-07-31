package main.patterns.layer;

public class LayerCar {
    private final String LAYER_NAME;

    public LayerCar(String layerName) {
        this.LAYER_NAME = layerName;
    }

    public void printCarAssets() {
        System.out.println(this.LAYER_NAME);
    }
}
