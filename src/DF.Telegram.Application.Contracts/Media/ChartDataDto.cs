﻿using System;
using System.Collections.Generic;
using System.Text;

namespace DF.Telegram.Media
{
    public class ChartDataDto
    {
        public List<string>? Labels { get; set; }
        public List<int>? Datas { get; set; }
    }
}
