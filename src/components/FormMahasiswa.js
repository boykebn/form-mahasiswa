import React, {useState}  from "react";
import DummyAvatar from '../images/dummyAvatar.jpg'


const FormMahasiswa = () => {
  const [penilaian, setPenilaian] = useState(Array.from({ length: 10 }, () => ({ 
    aspek1: '', 
    aspek2: '', 
    aspek3: '', 
    aspek4: '' 
  })));

  const handlePenilaianChange = (e, index, aspek) => {
    const value = e.target.value;
    setPenilaian((prevPenilaian) => {
      const newPenilaian = [...prevPenilaian];
      newPenilaian[index] = {
        ...newPenilaian[index],
        [aspek]: value
      };
      return newPenilaian;
    });
  };

  const handleSimpan = (e) => {
    e.preventDefault();
    const hasilPenilaian = {
      aspek_penilaian_1: {

      },
      aspek_penilaian_2: {

      },
      aspek_penilaian_3: {

      },
      aspek_penilaian_4: {

      }
    };

    penilaian.forEach((mahasiswa, index) => {
      hasilPenilaian.aspek_penilaian_1[`mahasiswa ${index + 1}`] = mahasiswa.aspek1;
      hasilPenilaian.aspek_penilaian_2[`mahasiswa ${index + 1}`] = mahasiswa.aspek2;
      hasilPenilaian.aspek_penilaian_3[`mahasiswa ${index + 1}`] = mahasiswa.aspek3;
      hasilPenilaian.aspek_penilaian_4[`mahasiswa ${index + 1}`] = mahasiswa.aspek4;
    });

    console.log(JSON.stringify(hasilPenilaian));
    console.log(hasilPenilaian);
  };

    return (
        <>
          <div className="w-full h-full">
            <h1 className="flex justify-center items-center text-5xl p-12">
              Aplikasi Penilaian Mahasiswa
            </h1>
          </div>

          <div className="flex justify-center items-center gap-[60px] w-[800px] ml-[470px]">
            <h2 className="h-10 leading-5 text-md text-center font-semibold w-[80px]">Aspek Penilaian 1</h2>
            <h2 className="ml-12 h-10 leading-5 text-md text-center font-semibold w-[80px]">Aspek Penilaian 2</h2>
            <h2 className="ml-12 h-10 leading-5 text-md text-center font-semibold w-[80px]">Aspek Penilaian 3</h2>
            <h2 className="ml-12 h-10 leading-5 text-md text-center font-semibold w-[80px]">Aspek Penilaian 4</h2>
          </div>

          <div>
              <form>
                {penilaian.map((mahasiswa, index) => (
                  <div key={index} className="flex items-center gap-4 border ml-[240px] w-[1000px] bg-gray-200 p-2 m-2 rounded-md">
                    <img src={DummyAvatar} alt="dummy_picture" width={50} height={50} className="rounded-full ml-5" />
                    <p className="text-xl mr-12">Mahasiswa {index + 1}</p>

                    <div className="flex gap-10">
                      <select 
                        className="select w-[150px] h-[20px] max-w-xs" 
                        id={`aspek1-mahasiswa${index}`}
                        value={mahasiswa.aspek1}
                        onChange={(e) => handlePenilaianChange(e, index, 'aspek1')}
                      >
                        <option value="" disabled selected>Pilih Nilai</option>
                        {[...Array(10)].map((_, i) => (
                        <option key={i} value={i + 1}>
                          {i + 1}
                        </option>
                        ))}
                      </select>

                      <select 
                        className="select w-[150px] h-[20px] max-w-xs"
                        id={`aspek2-mahasiswa${index}`}
                        value={mahasiswa.aspek2}
                        onChange={(e) => handlePenilaianChange(e, index, 'aspek2')}
                      >
                        <option value="" disabled selected>Pilih Nilai</option>
                        {[...Array(10)].map((_, i) => (
                        <option key={i} value={i + 1}>
                          {i + 1}
                        </option>
                        ))}
                      </select>

                      <select 
                        className="select w-[150px] h-[20px] max-w-xs"
                        id={`aspek3-mahasiswa${index}`}
                        value={mahasiswa.aspek3}
                        onChange={(e) => handlePenilaianChange(e, index, 'aspek3')}
                      >
                        <option value="" disabled selected>Pilih Nilai</option>
                        {[...Array(10)].map((_, i) => (
                        <option key={i} value={i + 1}>
                          {i + 1}
                        </option>
                        ))}
                      </select>

                      <select 
                        className="select w-[150px] h-[20px] max-w-xs"
                        id={`aspek4-mahasiswa${index}`}
                        value={mahasiswa.aspek4}
                        onChange={(e) => handlePenilaianChange(e, index, 'aspek4')}
                      >
                        <option value="" disabled selected>Pilih Nilai</option>
                        {[...Array(10)].map((_, i) => (
                        <option key={i} value={i + 1}>
                          {i + 1}
                        </option>
                        ))}
                      </select>
                    </div>
                    
                  </div>
                ))}
                  <div className="flex justify-end mr-[218px] pt-12 pb-10">
                    <button type="submit" onClick={handleSimpan} className="btn">Simpan</button>
                  </div>
            </form>
          </div>
        </>
    );
}

export default FormMahasiswa;