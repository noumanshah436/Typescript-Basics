// Classes can be written in a way that allows them to be used as a base class for other classes without having to implement all the members.
//  This is done by using the abstract keyword. Members that are left unimplemented also use the abstract keyword.

abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepia(): void;

  getReelTime(): number {
    //some complex calculation
    return 8;
  }
}

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log("Sepia");
  }
}

const hc = new Instagram("test", "Test", 3);

hc.getReelTime();
