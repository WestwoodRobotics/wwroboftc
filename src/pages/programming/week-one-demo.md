---
title: Week One Demo
description: About teleoperative programs in FTC
layout: ../../layouts/MainLayout.astro
---

```java
package org.firstinspires.ftc.teamcode;

import com.qualcomm.robotcore.eventloop.opmode.LinearOpMode;
import com.qualcomm.robotcore.eventloop.opmode.TeleOp;
import com.qualcomm.robotcore.eventloop.opmode.Disabled;
import com.qualcomm.robotcore.hardware.DcMotor;
import com.qualcomm.robotcore.util.ElapsedTime;
import com.qualcomm.robotcore.util.Range;

@TeleOp(name="First Week Program", group="Linear Opmode")

public class FirstWeek extends LinearOpMode {

    private ElapsedTime runtime = new ElapsedTime();

    private DcMotor theMotor = null;
    
    public void runOpMode() {
    telemetry.addData("Status", "Initialized");
    
    telemetry.update();
    theMotor = hardwareMap.get(DcMotor.class, "random_motor");
    waitForStart();
    runtime.reset();
    theMotor.setPower(.3);
    runtime.reset();
    while (runtime.milliseconds() < 2000){}
    theMotor.setPower(0);
    }

}
```
