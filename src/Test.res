@genType
let test = (
  ~v1: string,
  ~v2: int,
  ~parser: (~data: array<{..}>, ~vOne: Js.Undefined.t<string>=?, ~vTwo:Js.Undefined.t<int>=?) => {..},
) => {
  Js.log(parser);
  parser(
    ~data=[
      {
        "v1": v1,
        "v2": v2,
      },
    ],
    ~vOne=Some("world!")->Js.Undefined.fromOption,
    ~vTwo=Some(1)->Js.Undefined.fromOption,
  )
}
