package test.patterns.layer;

import main.patterns.layer.Car;
import main.patterns.layer.DistributorCar;
import main.patterns.layer.FabricCar;

import java.time.LocalDate;
import java.time.Month;

public class CreateCar {
    private Thread thread = null;
    private Runnable tasks = () -> {
        this.shouldContructCarByPrinters();
    };

    public void runTasks() {
        this.thread = new Thread(tasks, "Thread-CreateCar");
        this.thread.start();
    }

    private void shouldContructCarByPrinters() {
        Car yaris = new Car("Juan Jose", 15000);
        DistributorCar toyota = new DistributorCar(LocalDate.of(2012, Month.DECEMBER, 12), "5642-KO", 21000);
        FabricCar tokioAssembling = new FabricCar((byte) 4, "yellow", (byte) 5);

        yaris.setLowerLayer(toyota);
        toyota.setLowerLayer(tokioAssembling);
        yaris.printCarAssets();
    }
}
